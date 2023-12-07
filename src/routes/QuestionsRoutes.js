// imports
import { Router } from "express";
import { UpdateQuestion, createQuestion, deleteQuestion, getAllQuestion } from "../controllers/Questions/QuestionsControllers.js";

// router
const router = Router();

// question router
router.post("/create-question", createQuestion);
router.delete('/delete-question/:id', deleteQuestion)
router.patch('/update-questionr/:id', UpdateQuestion)
router.get("/get-question", getAllQuestion);
router.get("/get-question/:id", getAllQuestion);
// exporting
export default router;  