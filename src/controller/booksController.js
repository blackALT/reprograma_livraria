const books = require("../model/books.json");
const fs = require("fs");
const { resourceUsage } = require("process");

const getAllBooks = (req, res) => {
    console.log(req.url);
    res.status(200).send(books);
}

const getAllBooksAvailable = (req, res) => {
    const booksAvailable = books.filter(book => book.available == true);
    res.status(200).send(booksAvailable);
}

const deleteBook = (req, res) => {
    const id = req.params.id;
    const bookFiltered = books.find((book) => book.id == id);
    const index = books.indexOf(bookFiltered);
    
    books.splice(index, 1);
  
    fs.writeFile("./src/model/books.json", JSON.stringify(books), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Livro excluído com sucesso!");
    });
  
    res.status(200).send(books);
  };

const postBooks = (req, res) => {
    console.log(req.body);
  
    const { id, title, author, category, available } = req.body;
  
    books.push({ id, title, author, category, available });
  
    fs.writeFile("./src/model/books.json", JSON.stringify(books), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Livro atualizado com sucesso!");
    });
  
    res.status(201).send(books);  
  };



module.exports = {
    getAllBooks,
    postBooks,
    deleteBook,
    getAllBooksAvailable
}