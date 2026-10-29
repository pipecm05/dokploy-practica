const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensaje: "¡Aplicación desplegada correctamente con Dokploy!",
    version: "1.0.0",
    estado: "En funcionamiento"
  });
});

app.get("/salud", (req, res) => {
  res.status(200).json({
    estado: "OK"
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
