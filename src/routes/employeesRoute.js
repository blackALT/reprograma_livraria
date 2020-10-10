const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller =  require("../controller/employeesController");

router.get("/", controller.getAllEmployees);
router.post("/", controller.postEmployees);

module.exports = router