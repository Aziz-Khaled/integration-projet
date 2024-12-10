const mongoose = require("mongoose");
const Fournisseur = require("./Fournisseur");

const Commande = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    tranches: { type: Number, required: true, min: 1 },
    trancheDetails: [
      {
        trancheNumber: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    fournisseur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fournisseur", 
      required: true, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Commande", Commande);
