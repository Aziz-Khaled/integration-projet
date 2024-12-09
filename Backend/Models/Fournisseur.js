const mongoose = require ("mongoose")


const Fournisseur = new mongoose.Schema({
    nom : {type:String } , 
    prenom : {type:String} , 
    email : {type:String} ,
    phoneNumber : {type: Number } ,
    dd_contrat : {default : new Date ()} , 
    df_contrat : {default : new Date ()}

})



module.exports = mongoose.model ("Fournisseur" ,Fournisseur ) 