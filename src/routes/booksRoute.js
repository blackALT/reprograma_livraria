const express = require("express");
const router = express.Router();
const controller = require("../controller/booksController");

router.get("/", controller.getAllBooks);
router.post("/", controller.postBooks);

module.exports = router