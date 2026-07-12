// App: construye y configura la aplicación de Express

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const datosRoutes = require('./routes/datos.routes');

const app = express();

// Middlewares de seguridad y logging
app.use(helmet());
app.use(morgan('dev'));

// Middlewares de comunicación
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api', datosRoutes);

module.exports = app;