import mongoose from 'mongoose';

const questions = new mongoose.Schema({
  categoriesSentenc: {
    type: String,
    required: [true, "categories Sentenc is required!"],
  },
  categorie: {
    type: Array,
    required: [true, "categorie is required!"],
  },
  items: {
    type: Array,
    required: [true, "items is required!"],
  },
  clozeSentence: {
    type: String,
    required: [true, "Cloze Sentence is required!"],
  },
  clozeRightSentence: {
    type: String,
    required: [true, "rightSentence is required!"],
  },
  underLineWords: {
    type: Array,
    required: [true, "underLineWords is required!"],
  },
  passage: {
    type: String,
    required: [true, "passage is required!"],
  },
  question: {
    type: Array,
    required: [true, "question is required!"],
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

const QuestionsModel = mongoose.model('question', questions);

export default QuestionsModel;
