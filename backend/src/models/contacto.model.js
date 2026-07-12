// Modelo: todas las consultas SQL relacionadas con la tabla "contactos"

const db = require('../config/database');

// CREATE — inserta un contacto nuevo
const crearContacto = ({ nombre, email, telefono, mensaje }) => {
    const stmt = db.prepare(`
        INSERT INTO contactos (nombre, email, telefono, mensaje)
        VALUES (?, ?, ?, ?)
    `);
    const resultado = stmt.run(nombre, email, telefono, mensaje);
    return obtenerContactoPorId(resultado.lastInsertRowid);
};

// READ — devuelve todos los contactos, del más nuevo al más viejo
const obtenerContactos = () => {
    const stmt = db.prepare('SELECT * FROM contactos ORDER BY id DESC');
    return stmt.all();
};

// READ — devuelve un contacto por su id
const obtenerContactoPorId = (id) => {
    const stmt = db.prepare('SELECT * FROM contactos WHERE id = ?');
    return stmt.get(id);
};

// UPDATE — reemplaza todos los campos de un contacto
const actualizarContacto = (id, { nombre, email, telefono, mensaje }) => {
    const stmt = db.prepare(`
        UPDATE contactos
        SET nombre = ?, email = ?, telefono = ?, mensaje = ?
        WHERE id = ?
    `);
    const resultado = stmt.run(nombre, email, telefono, mensaje, id);
    if (resultado.changes === 0) return null;
    return obtenerContactoPorId(id);
};

// DELETE — elimina un contacto por su id
const eliminarContacto = (id) => {
    const stmt = db.prepare('DELETE FROM contactos WHERE id = ?');
    const resultado = stmt.run(id);
    return resultado.changes > 0;
};

module.exports = {
    crearContacto,
    obtenerContactos,
    obtenerContactoPorId,
    actualizarContacto,
    eliminarContacto
};