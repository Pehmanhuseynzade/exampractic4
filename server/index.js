const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const blogSchema = new mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  imageURL: String,
});

const blogModel = mongoose.model("Blog", blogSchema);


//POST

app.post(`/api/blog`,async(req,res)=>{
     const{name,price,desc,imageURL} = req.body
     const postModel = new blogModel({
          name:name,
          price:price,
          desc:desc,
          imageURL:imageURL,
     })
     await postModel.save()
     res.status(201).send({
          message:"Posted succesfully!",
          payload:postModel
     })
})

//GET

app.get(`/api/blog`,async(req,res)=>{
     const{name}=req.query
     const getModel = await blogModel.find()
     if(!name){
          res.status(200).send(getModel)
     }
     else{
          const searchedGet = getModel.filter((x)=>
               x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          )
          res.status(200).send(searchedGet)
     }
})


//GET ID

app.get(`/api/blog/:id`,async(req,res)=>{
     const {id} = req.params
     const newID = await blogModel.findById(id)
     res.status(200).send(newID)
})

//DELETE

app.delete(`/api/blog/:id`,async(req,res)=>{
     const id = req.params.id
     const newDelete = await blogModel.findByIdAndDelete(id)
     res.status(202).send(newDelete)
})

//PUT

app.put(`/api/blog/:id`,async(req,res)=>{
     const id = req.params.id
     const{name,price,desc,imageURL} = req.body
     const putModel = {
          name:name,
          price:price,
          desc:desc,
          imageURL:imageURL,
     }
     await blogModel.findByIdAndUpdate(id,putModel)
     res.status(200).send({
          message:`${putModel.name} updated succesfully!`
     })
})





PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("MongoDB connected!");
});

// PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

// DB_CONNECTION = process.env.process;
// DB_PASSWORD = process.env.process;

// mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
//   console.log("MongoDB connected!");
// });
