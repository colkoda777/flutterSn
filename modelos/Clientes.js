const mongoose = require("mongoose");

const ClientesSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    tipoDocumento: { type: String, required: true },
    documento: { type: String, required: true, unique: true },
    empresa: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    activo: { type: Boolean, default: true },
});

module.exports = mongoose.model("Clientes", ClientesSchema);
