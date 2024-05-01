const { trainerRouter } = require("./routes/trainer_router.js");
const { traineeRouter } = require("./routes/trainee_router.js");

const express = require("express");
const app = express();
app.use(express.json());



app.use("/api/trainees/", traineeRouter);
app.use("/api/trainers/", trainerRouter);

module.exports = { app };