const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "¡Aplicación desplegada correctamente con Dokploy!",
        version: "2.0",
        despliegue: "Automático mediante GitHub",
        estado: "En funcionamiento"
    });
});

// Ruta para comprobar el estado de la aplicación
app.get("/health", (req, res) => {
    res.status(200).json({
        estado: "OK"
    });
});

// Ruta con información de la aplicación
app.get("/info", (req, res) => {
    res.json({
        aplicacion: "webapp-uni-quindio",
        version: "2.0",
        node: process.version,
        plataforma: process.platform,
        arquitectura: process.arch
    });
});

// Iniciar servidor
app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});