// Rutas: define qué endpoints existen y qué controlador atiende cada uno

const express = require('express');
const router = express.Router();
const { obtenerDatos } = require('../controllers/datos.controller');

router.get('/datos', obtenerDatos);

module.exports = router;