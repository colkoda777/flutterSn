const express = require("express");
const Venta = require("../modelos/Ventas");
const router = express.Router();

// Obtener todas las ventas
router.get("/", async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener una venta por ID
router.get("/:id", async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }
    res.json(venta);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Crear una nueva venta
router.post("/", async (req, res) => {
  try {
    const venta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar una venta
router.put("/:id", async (req, res) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!venta) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }
    res.json(venta);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar una venta
router.delete("/:id", async (req, res) => {
  try {
    const venta = await Venta.findByIdAndDelete(req.params.id);
    if (!venta) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }
    res.json({ message: "Venta eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
