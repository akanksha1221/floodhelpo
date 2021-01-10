const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Contact = require("./models/contact");
const Donate = require("./models/donate");
/*
var fs = require('fs');
var dData = fs.readFileSync('./Data/DoData.json');
var donated = JSON.parse(dData);
console.log(donated);
*/
const port =process.env.PORT || 8000;

const static_path = path.join(__dirname,'../../', 'frontend/src/component/contactform');
const donData = path.join(__dirname,'../../', 'frontend/src/Data/Donatordata');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));


app.set('view engine', 'html');

app.get("/",(req,res)=>{
    res.render("index")
});

app.post("/saved", async (req,res)=>{
   try{
      const contactPeople = new Contact({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message
      })
      const people = await contactPeople.save();
      res.status(201).redirect('/contactsaved');
   }
   catch(e){
       res.status(400).send(e);
   }
});
app.post("/donateinfo", async (req,res)=>{
   try{
      const donar = new Donate({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          postalcode: req.body.postalcode,
          amount: req.body.amount

      })
      const Dpeople = await donar.save();
      res.status(201).redirect('/donar');
   }
   catch(e){
       res.status(400).send(e);
   }
});
/*
app.get('/donar',function(req,res){
    Donate.find({},function(err,docs){
        if(err)
            res.json(err);
        else
            res.fs.writeFileSync('doData.json', JSON.stringify(docs));
    });
})
*/
app.listen(port,()=>{
    console.log(`server at ${port}`);
})