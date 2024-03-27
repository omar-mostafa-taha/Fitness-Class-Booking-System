import joi from "joi";
import { trainee } from "../models/trainee.js";

function validate_Trainee(trainee) {
    const schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
    });
    return schema.validate(trainee);
}

////////////////////////////////////
const getAllTrainees = (req, res) => {
    res.send(Trainee);
};

////////////////////////////////////////////

const geTraineeById = (req, res) => {
    const trainee = Trainee.find((c) => c.id === parseInt(req.params.id));
    if (!trainee) {
        res.status(404).send("the trainee with the given id not found");
    } else {
        res.send(trainee);
    }
};

/////////////////////////////////////////////////////
const addTrainee = (req, res) => {
    const result = validate_Trainee(req.body);
    if (result.error) {
        res.sendStatus(400).json({ msg: result.error.details[0].message });
        return;
    }
    const trainee = {
        id: Trainee[Trainee.length - 1].id + 1,
        name: req.body.name,
        email: req.body.email,
    };
    Trainee.push(trainee);
    res.send(Trainee);
};

//////////////////////////////////////////////////////////////////

const editTraineeById = (req, res) => {
    const trainee = Trainee.find((c) => c.id === parseInt(req.params.id));
    if (!trainee) res.status(404).send("the trainee with the given id not found");
    const result = validate_Trainee(req.body);
    if (result.error) {
        res.sendStatus(400).send(result.error.details[0].message);
        return;
    }
    if (req.body.name) {
        trainee.name = req.body.name;
    }
    if (req.body.email) {
        trainee.email = req.body.email;
    }
    res.send(Trainee);
};
/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
const deleteTrainee = (req, res) => {
    const trainee = Trainee.find((c) => c.id === parseInt(req.params.id));
    if (!trainee) res.status(404).send("the trainee with the given id not found");
    const index = Trainee.indexOf(trainee);
    Trainee.splice(index, 1);
    res.send(Trainee);
};

export {
    addTrainee,
    deleteTrainee,
    editTraineeById,
    getAllTrainees,
    geTraineeById,
};