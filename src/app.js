const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const index = require("./routes/index");
const employees = require("./routes/employees");
const books = require("./routes/books");

app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/livros", books)
app.use("/funcionarios", employees)

module.exports = app