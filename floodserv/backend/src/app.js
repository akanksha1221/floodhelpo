const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("./db/conn");
const Contact = require("./models/contact");
const Donate = require("./models/donate");

const port =process.env.PORT || 8000;

const static_path = path.join(__dirname,'../../', 'frontend/public/index');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(cors());

app.set('view engine', 'html');

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
       res.status(400).send(JSON.stringify(e));
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
       res.status(400).send(JSON.stringify(e));
   }
});


app.get('/donar',async (req,res)=>{
    Donate.find({},(err,result)=>{
        if(err)
            res.send(err);
        res.send(result);
    }).sort({"amount":-1});
})


app.listen(port,()=>{
    console.log(`server at ${port}`);
})