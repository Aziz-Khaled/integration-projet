const express = require("express");
const auth = express.Router();
require ('dotenv').config()
const {SignUpEmploye , SignIpEmploye} = require ("../Controllers/Auth")

const {getEmployee,getEmployeeById,contEmployee,addEmployee,updateEmployee,deleteEmployee}= require ("../Controllers/EmployeesController")

const {addFournisseur}  = require ("../Controllers/FournisseurController")

const {addCommande , getCommandes} = require ("../Controllers/Commande")

auth.post("/addEmploye",SignUpEmploye)
auth.post ("/SignInEmploye",SignIpEmploye)
auth.get("/getEmployees", getEmployee);
auth.get("/getEmployee/:id", getEmployeeById);
auth.get("/countEmployees", contEmployee);
auth.post('/addingEmp', addEmployee);
auth.put ('/updateEmployee/:id' , updateEmployee)
auth.delete ('/deleteEmployee/:id', deleteEmployee )


auth.post('/addFournisseur' , addFournisseur)


auth.post ('/AddCommande' , addCommande)
auth.get ('/allCommandes' , getCommandes)


module.exports = auth;