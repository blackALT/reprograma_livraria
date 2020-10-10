const books = require("../model/books.json");
const fs = require("fs");
const { resourceUsage } = require("process");

const getAllBooks = (req, res) => {
    console.log(req.url);
    res.status(200).send(books);
}