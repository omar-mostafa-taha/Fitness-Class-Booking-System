const { Router } = require("express");

const traineeRouter = Router();
const trainee_controller = require("../controllers/Trainee_controller.js")

traineeRouter.get("/", trainee_controller.getAllTrainees);
traineeRouter.get("/:id", trainee_controller.getTraineeById);
traineeRouter.post("/", trainee_controller.addTrainee);
traineeRouter.put("/:id", trainee_controller.editTraineeById);
traineeRouter.delete("/:id", trainee_controller.deleteTrainee);

module.exports = { traineeRouter };
