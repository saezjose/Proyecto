// Rutas de contactos

const express = require('express');
const router = express.Router();
const controlador = require('../controllers/contacto.controller');

router.post('/contactos', controlador.crear);
router.get('/contactos', controlador.listar);
router.get('/contactos/:id', controlador.obtenerPorId);
router.put('/contactos/:id', controlador.actualizar);
router.patch('/contactos/:id', controlador.actualizarParcial);
router.delete('/contactos/:id', controlador.eliminar);

module.exports = router;