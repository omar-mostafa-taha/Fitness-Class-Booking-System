import { Router } from "express";
import * as trainee_controller from "../controllers/Trainee_controller.js";

const traineeRouter = Router();
traineeRouter.get("/", trainee_controller.getAlltrainee);
traineeRouter.get("/:id", trainee_controller.getraineeById);
traineeRouter.post("/", trainee_controller.addtrainee);
traineeRouter.put("/:id", trainee_controller.edittraineeById);
traineeRouter.delete("/:id", trainee_controller.deletetrainee);

export { traineeRouter };

