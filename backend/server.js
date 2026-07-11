const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de seguridad y logging
app.use(helmet());
app.use(morgan('dev'));

// Middlewares de comunicación
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