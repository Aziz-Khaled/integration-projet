const express = require("express");
const auth = express.Router();
require ('dotenv').config()
const {SignUpEmploye , SignIpEmploye} = require ("../Controllers/Auth")
const {getEmployee , getEmployeeById , contEmployee , addEmployee}= require ("../Controllers//Employees")

auth.post("/addEmploye",SignUpEmploye)
auth.post ("/SignInEmploye",SignIpEmploye)
auth.get("/getEmployees", getEmployee);
auth.get("/getEmployee/:id", getEmployeeById);
auth.get("/countEmployees", contEmployee);
auth.post('/addingEmp', addEmployee);

module.exports = auth;