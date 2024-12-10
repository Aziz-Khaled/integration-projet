const Commande = require("../Models/Commande");
const Fournisseur = require("../Models/Fournisseur");

exports.addCommande = async (req, res) => {
  const { productName, quantity, tranches, trancheDetails, fournisseurId } =
    req.body;
  try {
    if (!productName || !quantity || !tranches || tranches < 1) {
      return res
        .status(400)
        .send({ msg: "Product name, quantity, and tranches are required" });
    }

    if (
      tranches > 1 &&
      (!trancheDetails || trancheDetails.length !== tranches)
    ) {
      return res
        .status(400)
        .send({ msg: "Tranche details for each tranche are required" });
    }

    const fournisseur = await Fournisseur.findById(fournisseurId);
    if (!fournisseur) {
      return res.status(404).send({ msg: "Fournisseur not found" });
    }

    const newCommande = new Commande({
      productName,
      quantity,
      tranches,
      trancheDetails,
      fournisseur: fournisseur._id,
    });

    await newCommande.save();

    return res.status(201).send({
      msg: "Commande added successfully",
      newCommande,
    });
  } catch (error) {
    console.error("Error adding commande:", error);
    return res
      .status(500)
      .send({ msg: "Internal server error", error: error.message });
  }
};

exports.getCommande = async (req , res ) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ msg: "Internal server error", error : error.message })
    }
}

exports.getCommandes = async (req, res) => {
    try {
      const commandes = await Commande.find();
      return res.status(200).send(commandes);
    } catch (error) {
      console.error("Error fetching commandes:", error);
      return res.status(500).send({ msg: "Internal server error", error: error.message });
    }
  };