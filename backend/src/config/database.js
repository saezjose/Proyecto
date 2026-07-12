// Configuración y conexión a la base de datos SQLite

const Database = require('better-sqlite3');
const path = require('path');

// Ruta al archivo de la base de datos (carpeta database/ en la raíz del proyecto)
const dbPath = path.join(__dirname, '..', '..', '..', 'database', 'proyecto.db');

// Abre la conexión. Si el archivo no existe, lo crea.
const db = new Database(dbPath);

// Habilita las claves foráneas (buena práctica, útil a futuro)
db.pragma('foreign_keys = ON');

// Crea la tabla de contactos si todavía no existe
const crearTablas = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL,
            telefono TEXT,
            mensaje TEXT NOT NULL,
            creado_en TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
        )
    `);
    console.log('[DB] Base de datos conectada y tabla "contactos" verificada.');
};

crearTablas();

module.exports = db;