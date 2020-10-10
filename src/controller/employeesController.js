const employees = require("../model/employees.json");
const fs = require("fs");
const { resourceUsage } = require("process");
const e = require("express");

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

  const deleteEmployee = (req, res) => {
    const id = req.params.id;
    const employeeFiltered = employees.find((employee) => employee.id == id);
    const index = employees.indexOf(employeeFiltered);
    
    employees.splice(index, 1);
  
    fs.writeFile("./src/model/employees.json", JSON.stringify(employees), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Funcionário demitido!");
    });
  
    res.status(200).send(employees);
  };

  const getEmployeeById = (req, res) => {
    const id = req.params.id;
    const employee = employees.filter(employee => employee.id == id);
    const ageEmployee = employee.map(employee => employee.age);
    res.status(200).send(ageEmployee);
}

module.exports = {
    getAllEmployees,
    postEmployees,
    deleteEmployee,
    getEmployeeById
}