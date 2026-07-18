// Server: punto de entrada. Solo levanta el servidor.

require('dotenv').config();
require('./src/config/database');
const app = require('./src/app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`[SERVER] Servidor corriendo con éxito en: http://localhost:${PORT}`);
    console.log(`[SERVER] Entorno (NODE_ENV): ${process.env.NODE_ENV || 'no definido'}`);
});