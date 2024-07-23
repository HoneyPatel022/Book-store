const mongoose = require("mongoose");

const bookmodel = new mongoose.Schema({
    image:String,
    name:String,
    author:String,
    description:String,
    pages:String,
    publication:String


});
module.exports =  mongoose.model("books",bookmodel)