import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./middleware/error.middleware.js";
dotenv.config();

// Variables

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares and Routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(errorMiddleware);

// Run Server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
