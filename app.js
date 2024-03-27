import express from "express";
import { traineeRouter } from "./routes/trainee_router.js";
import { trainerRouter } from "./routes/trainer_router.js";

const app = express();
app.use(express.json());

app.use("/api/trainees/", traineeRouter);
app.use("/api/trainers/", trainerRouter);

export { app };