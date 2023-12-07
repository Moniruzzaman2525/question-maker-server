// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/databaseConfigs.js";
import question from "./routes/QuestionsRoutes.js";
import userRoutes from "./routes/AuthUserRoutes.js";

// Application
const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

//Data base connect
connectDB();


// users routes
app.use("/api/v1/auth/", userRoutes);
app.use("/api/v1/question/", question);

// Routes
app.get("/", (req, res) => {
  return res.send("Sunshine Server Running...!!");
});

// Handle Not valid routes
app.use("*", (req, res) => {
  return res.status(404).send("Invalid Route!!");
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
