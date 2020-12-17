const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type: Number,
         required: true,
         unique:true
    },
    address:{
        type: String,
        required: true
    },
    postalcode:{
        type: Number
    },
    discription:{
        type: String,
        required: true
    }
    
})

const Donate = new mongoose.model("Donate", donateSchema);

module.exports = Donate;