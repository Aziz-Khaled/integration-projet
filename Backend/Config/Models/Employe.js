const mongoose = require ("mongoose")



const Employe = new mongoose.Schema({
    email : { type: String , required: true , unique: true} , 
    password : { type: String , required: true} , 
    role : { type :String}
})



module.exports = mongoose.model ("Employe" ,Employe ) 