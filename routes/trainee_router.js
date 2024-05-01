const { Router } = require("express");

const traineeRouter = Router();
const trainee_controller = require("../controllers/Trainee_controller.js")

traineeRouter.get("/", trainee_controller.getAlltrainee);
traineeRouter.get("/:id", trainee_controller.getraineeById);
traineeRouter.post("/", trainee_controller.addtrainee);
traineeRouter.put("/:id", trainee_controller.edittraineeById);
traineeRouter.delete("/:id", trainee_controller.deletetrainee);

module.exports = { traineeRouter };
