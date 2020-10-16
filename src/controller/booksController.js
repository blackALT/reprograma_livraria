const books = require("../model/books.json");
const fs = require("fs");
const { resourceUsage } = require("process");

const getAllBooks = (req, res) => {
    console.log(req.url);
    res.status(200).send(books);
}

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

const getBookByCategory = (req, res) => {
    const categoria = req.params.categoria;
    const bookFiltered = books.filter(book => book.category == categoria);
    res.status(200).send(bookFiltered);
}

const getAllBooksAvailable = (req, res) => {
    const booksAvailable = books.filter(book => book.available == true);
    //const available = booksAvailable.map(book => book.title);
    res.status(200).send(booksAvailable);
}

/*
1 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

2 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH.
*/

const putBooks = (req, res) => {
  try {
    const id = req.params.id;

    const modifiedBook = books.find((book) => book.id == id);
    console.log(modifiedBook);

    const bookToUpdate = req.body;
    console.log(bookToUpdate);

    const index = books.indexOf(modifiedBook);
    console.log(index);

    books.splice(index, 1, bookToUpdate);
    console.log(books);

    fs.writeFile("./src/model/books.json", JSON.stringify(books), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Livro atualizado com sucesso!");
    });
  
    res.status(201).send(books);
    
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}

const patchBooks = (req, res) => {
  const id = req.params.id;
  const updateBook = req.body;
  console.log(updateBook)

  try {
    const bookToUpdate = books.find((book) => book.id == id);

    Object.keys(updateBook).forEach((key) => {
      bookToUpdate[key] = updateBook[key]
    })

  fs.writeFile("./src/model/books.json", JSON.stringify(books), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Livro atualizado com sucesso!");
  });

  res.status(201).send(books);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}

module.exports = {
    getAllBooks,
    postBooks,
    deleteBook,
    getBookByCategory,
    getAllBooksAvailable,
    putBooks,
    patchBooks
}