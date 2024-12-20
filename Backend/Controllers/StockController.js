const Stock = require("../Models/Stock");

exports.AddInStock = async (req, res) => {
    const { Name, StockNumber } = req.body;


    if (!Name || !StockNumber) {
        return res.status(400).json({ msg: "Name and StockNumber are required." });
    }

    try {
        const findStock = await Stock.findOne({ Name });
        if (findStock) {
            return res.status(409).json({ msg: "Stock already exists." }); 
        }

        const newStock = new Stock({
            Name,
            StockNumber,
        });

        await newStock.save();

        return res.status(201).json({ msg: "Stock added successfully.", stock: newStock });
    } catch (error) {
        console.error("Error while adding stock:", error); 
        return res.status(500).json({ msg: "Error while adding stock.", error });
    }
};
