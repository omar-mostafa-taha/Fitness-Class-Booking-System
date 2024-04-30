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


const getAllTrainer = (req, res) => {
  res.send(Trainer);
};

////////////////////////////////////////////

const getTrainerById = (req, res) => {
  const trainer = Trainer.find((c) => c.id === parseInt(req.params.id));
  if (!trainer) {
    res.status(404).send("the trainer with the given id not found");
  } else {
    res.send(trainer);
  }
};

/////////////////////////////////////////////////////
const addTrainer = (req, res) => {
  const result = validate_Trainer(req.body);
  if (result.error) {
    res.sendStatus(400).json({ msg: result.error.details[0].message });
    return;
  }
  const trainer = {
    id: Trainer[Trainer.length - 1].id + 1,
    name: req.body.name,
    email: req.body.email,
  };
  Trainer.push(trainer);
  res.send(trainer);
};

//////////////////////////////////////////////////////////////////

const editTrainerById = (req, res) => {
  const trainer = Trainer.find((c) => c.id === parseInt(req.params.id));
  if (!trainer) res.status(404).send("the trainer with the given id not found");
  const result = validate_Student(req.body);
  if (result.error) {
    res.sendStatus(400).send(result.error.details[0].message);
    return;
  }
  if (req.body.name) {
    trainer.name = req.body.name;
  }
  if (req.body.email) {
    trainer.email = req.body.email;
  }
  res.send(Trainer);
};
/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
const deleteTrainer = (req, res) => {
  const trainer = Trainer.find((c) => c.id === parseInt(req.params.id));
  if (!trainer) res.status(404).send("the trainer with the given id not found");
  const index = Trainer.indexOf(trainer);
  Trainer.splice(index, 1);
  res.send(Trainer);
};

module.exports = {
  addTrainer,
  deleteTrainer,
  editTrainerById,
  getAllTrainer,
  getTrainerById,
};
