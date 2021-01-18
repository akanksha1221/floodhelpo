const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    seq:{ 
        type: Number, 
        default: 1
    },
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
    amount:{
        type: Number,
        required: true
    }
})

const Donate = new mongoose.model("Donate", donateSchema);

module.exports = Donate;