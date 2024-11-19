const express = require("express");
const auth = express.Router();
require ('dotenv').config()
const {SignUpEmploye , SignIpEmploye} = require ("../Controllers/Auth")

auth.post("/addEmploye" , SignUpEmploye)

auth.post ("/SignInEmploye" ,  SignIpEmploye)






module.exports = auth;