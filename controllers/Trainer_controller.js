const joi = require("joi");
const  {Trainer}  = require("../models/trainer.js");


function validate_Trainer(trainer) {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  });
  return schema.validate(trainer);
}


const getAllTrainer = async (req, res) => {
  try {
    const alltrainers = await Trainer.find({});
    res.status(200).send(alltrainers);
  } catch (error) {
    res.status(400).send(error);
  }
};

////////////////////////////////////////////

const getTrainerById = async (req, res) => {
    try {
      const trainerById = await Trainer.findOne({ _id: req.params.id });
      res.status(200).send(trainerById);
    
    } catch (error) {
      res.status(400).send(error);
    }
};

/////////////////////////////////////////////////////
const addTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(200).send(trainer);

  } catch (error) {
    res.status(400).send(error);
  }
};

//////////////////////////////////////////////////////////////////

const editTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findOne({ _id: req.params.id });
    if(!trainer) {
      return res.status(404).send("Trainer not found");
    }
    if (req.body.name != null) {
        trainer.name = req.body.name; 
    }
    if (req.body.email!= null) {
        trainer.email = req.body.email;
    }

    await trainer.save();
    res.status(200).send(trainer);
  
  } catch (error) {
    res.status(400).send(error);
  };
};
/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.deleteOne({ _id: req.params.id });
    res.status(200).send(trainer);
  
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addTrainer,
  deleteTrainer,
  editTrainerById,
  getAllTrainer,
  getTrainerById,
};
