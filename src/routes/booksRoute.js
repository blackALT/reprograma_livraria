const express = require("express");
const router = express.Router();
const controller = require("../controller/booksController");

router.get("/", controller.getAllBooks);
router.post("/", controller.postBooks);
router.get("/disponiveis", controller.getAllBooksAvailable);
router.get("/:categoria", controller.getBookByCategory);
router.delete("/:id", controller.deleteBook);


module.exports = router