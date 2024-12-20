const Fournisseur = require("../Models/Fournisseur");

exports.addFournisseur = async (req, res) => {
    const { nom, prenom, email, phoneNumber, dd_contrat, df_contrat } = req.body;
    try {
        const findFournisseur = await Fournisseur.findOne({ email });
        if (findFournisseur) {
            return res.status(400).json({ msg: "Fournisseur existe" });
        }

        const newFournisseur = new Fournisseur({
            nom,
            prenom,
            email,
            phoneNumber,
            dd_contrat,
            df_contrat
        });

        await newFournisseur.save();
        return res.status(200).json({ msg: "Fournisseur added with success", newFournisseur });
    } catch (error) {
        return res.status(500).json({ msg: "Error while adding fournisseur", error });
    }
};



