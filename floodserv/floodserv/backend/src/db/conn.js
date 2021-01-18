const mongoose = require("mongoose");
const fs=require('fs');
mongoose.connect("mongodb://localhost:27017/FloodHelpo",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})