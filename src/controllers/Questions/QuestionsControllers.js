import QuestionsModel from "../../models/Questions.js";


const createQuestion = async (req, res) => {
  try {
    const result = new QuestionsModel({
      categoriesSentenc: req.body.categoriesSentenc,
      categorie: req.body.categorie,
      items: req.body.items,
      clozeSentence: req.body.clozeSentence,
      clozeRightSentence: req.body.clozeRightSentence,
      underLineWords: req.body.underLineWords,
      passage: req.body.passage,
      question: req.body.question,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteQuestion = async (req, res) => {
  try {
    if (!(await QuestionsModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await QuestionsModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateQuestion = async (req, res) => {
  try {
    const visitorBook = await QuestionsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!visitorBook) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(visitorBook);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllQuestion = async (req, res) => {
  try {
    const data = await QuestionsModel.find({});

    // Initialize arrays for each type of data
    const categoriesArray = [];
    const clozeArray = [];
    const comprehensionArray = [];

    // Assuming data is an array, map through each document to format it
    data.forEach(item => {
      // First object: categories
      const categoriesObject = {
        categoriesSentenc: item.categoriesSentenc,
        categorie: item.categorie,
        items: item.items,
      };
      categoriesArray.push(categoriesObject);

      // Second object: cloze
      const clozeObject = {
        clozeSentence: item.clozeSentence,
        clozeRightSentence: item.clozeRightSentence,
        underLineWords: item.underLineWords,
      };
      clozeArray.push(clozeObject);

      // Third object: comprehension
      const comprehensionObject = {
        question: item.question,
        passage: item.passage,
      };
      comprehensionArray.push(comprehensionObject);
    });

    return res.status(200).send({
      categories: categoriesArray,
      cloze: clozeArray,
      comprehension: comprehensionArray,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



export {
  createQuestion,
  deleteQuestion,
  UpdateQuestion,
  getAllQuestion,
}