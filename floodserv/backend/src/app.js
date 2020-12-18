const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Contact = require("./models/contact");
const Donate = require("./models/donate");

const port =process.env.PORT || 8000;

const static_path = path.join(__dirname,'../../', 'frontend/src/component/contactform');

console.log(static_path)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));


app.set('view engine', 'html');

/*app.get("/",(req,res)=>{
    res.render("index")
}); */

app.post("/saved", async (req,res)=>{
   try{
      const contactPeople = new Contact({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message
      })
      const people = await contactPeople.save();
      res.status(201).send("information Stored!");
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
          discription: req.body.discription

      })
      const Dpeople = await donar.save();
      res.status(201).send("Donation information Stored!");
   }
   catch(e){
       res.status(400).send(e);
   }
});

app.listen(port,()=>{
    console.log(`server at ${port}`);
})