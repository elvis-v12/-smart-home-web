const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); 

// Configuración de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rutas
const webRoutes = require("./routes/web.routes");
app.use("/", webRoutes);

const lightsRoutes = require("./routes/api/lights.routes");
const tempRoutes = require("./routes/api/temp.routes");
const doorRoutes = require("./routes/api/door.routes");

app.use("/api/lights", lightsRoutes);
app.use("/api/temp", tempRoutes);
app.use("/api/door", doorRoutes);

module.exports = app;
