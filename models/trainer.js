// const Trainer = [
//   { id: 1, name: "Omar Shaaban", email: "Omarshaaban@gmail.com" },
//   { id: 2, name: "Hany Rambod", email: "Hanyrambod@gmail.com" },
//   { id: 3, name: "Big Ramy", email: "Bigramy@gmail.com" },
// ];
const mongoose = require("mongoose");
const trainerSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true,
    },
    
    email : { 
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
});

const Trainer = mongoose.model('trainers' , trainerSchema)

module.exports = {Trainer,};