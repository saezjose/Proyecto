// Controlador: lógica de cada endpoint de contactos

const modelo = require('../models/contacto.model');
const { limpiarTexto, emailValido } = require('../utils/sanitizar');

// POST /api/contactos — crear un contacto
const crear = (req, res) => {
    try {
        const { nombre, email, telefono, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({
                error: 'Los campos nombre, email y mensaje son obligatorios.'
            });
        }

        if (!emailValido(email)) {
            return res.status(400).json({ error: 'El email no tiene un formato válido.' });
        }

        const contacto = modelo.crearContacto({
            nombre: limpiarTexto(nombre),
            email: email.trim(),
            telefono: telefono ? limpiarTexto(telefono) : null,
            mensaje: limpiarTexto(mensaje)
        });

        return res.status(201).json(contacto);
    } catch (error) {
        console.error('[ERROR] crear contacto:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

// GET /api/contactos — listar todos
const listar = (req, res) => {
    try {
        const contactos = modelo.obtenerContactos();
        return res.status(200).json(contactos);
    } catch (error) {
        console.error('[ERROR] listar contactos:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

// GET /api/contactos/:id — obtener uno
const obtenerPorId = (req, res) => {
    try {
        const contacto = modelo.obtenerContactoPorId(req.params.id);

        if (!contacto) {
            return res.status(404).json({ error: 'Contacto no encontrado.' });
        }

        return res.status(200).json(contacto);
    } catch (error) {
        console.error('[ERROR] obtener contacto:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

// PUT /api/contactos/:id — reemplazar por completo
const actualizar = (req, res) => {
    try {
        const { nombre, email, telefono, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({
                error: 'Los campos nombre, email y mensaje son obligatorios.'
            });
        }

        if (!emailValido(email)) {
            return res.status(400).json({ error: 'El email no tiene un formato válido.' });
        }

        const contacto = modelo.actualizarContacto(req.params.id, {
            nombre: limpiarTexto(nombre),
            email: email.trim(),
            telefono: telefono ? limpiarTexto(telefono) : null,
            mensaje: limpiarTexto(mensaje)
        });

        if (!contacto) {
            return res.status(404).json({ error: 'Contacto no encontrado.' });
        }

        return res.status(200).json(contacto);
    } catch (error) {
        console.error('[ERROR] actualizar contacto:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

// PATCH /api/contactos/:id — modificar parcialmente
const actualizarParcial = (req, res) => {
    try {
        const { email } = req.body;

        if (email !== undefined && !emailValido(email)) {
            return res.status(400).json({ error: 'El email no tiene un formato válido.' });
        }

        // Sanitiza solo los campos de texto presentes en la petición.
        const campos = { ...req.body };
        if (campos.nombre !== undefined) campos.nombre = limpiarTexto(campos.nombre);
        if (campos.telefono !== undefined) campos.telefono = limpiarTexto(campos.telefono);
        if (campos.mensaje !== undefined) campos.mensaje = limpiarTexto(campos.mensaje);
        if (campos.email !== undefined) campos.email = String(campos.email).trim();

        const contacto = modelo.actualizarParcialContacto(req.params.id, campos);

        if (!contacto) {
            return res.status(404).json({ error: 'Contacto no encontrado.' });
        }

        return res.status(200).json(contacto);
    } catch (error) {
        console.error('[ERROR] actualizar parcial contacto:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

// DELETE /api/contactos/:id — eliminar
const eliminar = (req, res) => {
    try {
        const eliminado = modelo.eliminarContacto(req.params.id);

        if (!eliminado) {
            return res.status(404).json({ error: 'Contacto no encontrado.' });
        }

        return res.status(204).send();
    } catch (error) {
        console.error('[ERROR] eliminar contacto:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = {
    crear,
    listar,
    obtenerPorId,
    actualizar,
    actualizarParcial,
    eliminar
};