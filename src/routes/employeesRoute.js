const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller =  require("../controller/employeesController");

router.get("/", controller.getAllEmployees);
router.post("/", controller.postEmployees);
router.delete("/:id", controller.deleteEmployee);
router.get("/:id", controller.getEmployeeById);

module.exports = router