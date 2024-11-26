const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");
const indexRoutes = require("./rutas/indexRoutes");
const ventasRoutes = require("./rutas/ventasRoutes")

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/clientes", indexRoutes);
app.use("/api/ventas", ventasRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
