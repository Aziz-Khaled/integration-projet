const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    StockNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Stock", StockSchema);
