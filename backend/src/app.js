// App: construye y configura la aplicación de Express

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const datosRoutes = require('./routes/datos.routes');
const contactoRoutes = require('./routes/contacto.routes');

const app = express();

// Middlewares de seguridad y logging
app.use(helmet());
app.use(morgan('dev'));

// CORS: origen configurable por entorno.
// TODO (Parte 23 - producción): restringir CORS_ORIGIN al dominio real del
// taller (ej: https://tu-dominio.com). El fallback '*' es solo para desarrollo.
const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: corsOrigin }));

app.use(express.json());

// Rate limit general para toda la API: 100 peticiones por IP cada 15 min.
// Holgado para navegación normal, corta scraping y abuso automatizado.
const limiteGeneral = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Demasiadas peticiones. Intentá de nuevo más tarde.' }
});
app.use('/api', limiteGeneral);

// Rutas de la API
app.use('/api', datosRoutes);
app.use('/api', contactoRoutes);

module.exports = app;