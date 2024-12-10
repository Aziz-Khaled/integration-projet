const mongoose = require("mongoose");

const FournisseurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    dd_contrat: { type: Date, default: new Date() },
    df_contrat: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Fournisseur", FournisseurSchema);
