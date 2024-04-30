const {Router} = require("express");
const trainerRouter = Router();
const trainer_controller = require("../controllers/Trainer_controller.js")

trainerRouter.get("/", trainer_controller.getAllTrainer);
trainerRouter.get("/:id", trainer_controller.getTrainerById);
trainerRouter.post("/", trainer_controller.addTrainer);
trainerRouter.put("/:id", trainer_controller.editTrainerById);
trainerRouter.delete("/:id", trainer_controller.deleteTrainer);

module.exports =  { trainerRouter };

