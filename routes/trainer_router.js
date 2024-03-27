import { Router } from "express";
import * as trainer_controller from "../controllers/Trainer_controller.js";

const trainerRouter = Router();
trainerRouter.get("/", trainer_controller.getAllTrainer);
trainerRouter.get("/:id", trainer_controller.getTrainerById);
trainerRouter.post("/", trainer_controller.addTrainer);
trainerRouter.put("/:id", trainer_controller.editTrainerById);
trainerRouter.delete("/:id", trainer_controller.deleteTrainer);

export { trainerRouter };