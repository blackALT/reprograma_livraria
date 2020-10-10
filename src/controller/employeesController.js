const employees = require("../model/employees.json");
const fs = require("fs");
const { resourceUsage } = require("process");

const getAllEmployees = (req, res) => {
    console.log(req.url);
    res.status(200).send(employees);
}

const postEmployees = (req, res) => {
    console.log(req.body);
  
    const { id, name, age, position, sector } = req.body;
  
    employees.push({ id, name, age, position, sector });
  
    fs.writeFile("./src/model/employees.json", JSON.stringify(employees), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Funcionário atualizado com sucesso!");
    });
  
    res.status(201).send(employees);  
  };

module.exports = {
    getAllEmployees,
    postEmployees
}