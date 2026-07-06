const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta base de prueba
app.get('/api/datos', (req, res) => {
    res.json({
        mensaje: "¡Conexión exitosa con el backend de Express!",
        status: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`[SERVER] Servidor corriendo con éxito en: http://localhost:${PORT}`);
});