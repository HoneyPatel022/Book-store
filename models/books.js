const mongoose = require("mongoose");
const uri = "mongodb+srv://honeypatel424:fx69PO8ndJtjvCxX@cluster0.cvcjnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
    .connect(uri)
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));