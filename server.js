const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server started running : 3000");
});

app.get("/", (req, res) => {
  res.sendFile("C:/Users/Sandeep/Desktop/SANCHECK/index.html");
});

//Getting Form Data form HTML through POST method and handling here ****** Step: 3 ******
app.post("/", (req, res) => {
    //Inserting Data into MongoDB Created Schema and Connected Already ****** Step: 4 ******
    const person = new Person();
    person.name = req.body.name;
    person.save((err, doc) => {
        if (!err) {
        console.log("Data inserted");
        } else {
        console.log("Error during record insertion : " + err);
        }
    });
});

//Connecting with Database ****** Step: 1 ******
mongoose.connect("mongodb://localhost:27017/ContactDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Schema ****** Step: 2 ******
const Person = mongoose.model("Person", { name: String });

