// Rutas de contactos

const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const controlador = require('../controllers/contacto.controller');

// Límite estricto para el alta de contactos (único endpoint que escribe en la
// base): 5 envíos por IP cada 15 min. Un usuario real manda el formulario una
// vez; 5 tolera reintentos legítimos pero frena el spam.
const limiteContacto = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Enviaste demasiados mensajes. Esperá unos minutos e intentá de nuevo.' }
});

router.post('/contactos', limiteContacto, controlador.crear);
router.get('/contactos', controlador.listar);
router.get('/contactos/:id', controlador.obtenerPorId);
router.put('/contactos/:id', controlador.actualizar);
router.patch('/contactos/:id', controlador.actualizarParcial);
router.delete('/contactos/:id', controlador.eliminar);

module.exports = router;