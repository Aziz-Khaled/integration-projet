
// requirements
const express = require ('express') ;
const connectDb = require ("./Config/connectDb")
require ('dotenv').config()



const app = express() ;
connectDb()


app.listen (process.env.port , ()=> {
    console.log (`server is running on port ${process.env.port}`)
})