const { Trainee } = require("../models/trainee.js");

// Get all trainees in the database 
const getAllTrainees = async (req, res) => {
    try {
        const allTrainees = await Trainee.find({});
        res.status(200).send(allTrainees);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get one trainee
const getTraineeById = async (req, res) => {
    try {
        const trainee = await Trainee.findOne({ _id: req.params.id });
        res.status(200).send(trainee);

    } catch (error) {
        res.status(400).send(error);
    }
};

// Add Trainee to the database
const addTrainee = async (req, res) => {
    try {
        const trainee = await Trainee.create(req.body);
        res.status(200).send(trainee);

    } catch (error) {
        res.status(400).send(error);
    }
};

// Edit Trainee by it's id
const editTraineeById = async (req, res) => {
    try {
        const trainee = await Trainee.findOne({ _id: req.params.id });
        if (!trainee) {
            return res.status(404).send("This Trainee doesn't exist");
        }
        if (req.body.name != null) {
            trainee.name = req.body.name;
        }
        if (req.body.email != null) {
            trainee.email = req.body.email;
        }

        await trainee.save();
        res.status(200).send(trainee);

    } catch (error) {
        res.status(400).send(error);
    };
};

// Delete  a trainee by its id
const deleteTrainee = async (req, res) => {
    try {
        const trainee = await Trainee.deleteOne({ _id: req.params.id });
        res.status(200).send(trainee);

    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    addTrainee,
    deleteTrainee,
    editTraineeById,
    getAllTrainees,
    getTraineeById,
};