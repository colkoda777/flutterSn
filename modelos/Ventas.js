const mongoose = require("mongoose");

const VentasSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  productos: [
    {
      productoid: { type: String, required: true },
      nombre: { type: String, required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true }
});

module.exports = mongoose.model("Ventas", VentasSchema);
