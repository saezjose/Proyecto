// Utilidades de sanitización y validación de entrada.
// Usamos "validator": liviana y estándar, sin necesidad de un DOM simulado.

const validator = require('validator');

// Limpia un texto plano: recorta espacios y escapa caracteres HTML
// (< > & ' " /) para neutralizar intentos de XSS como <script>.
const limpiarTexto = (valor) => {
    if (typeof valor !== 'string') return valor;
    return validator.escape(valor.trim());
};

// Valida el formato de un email de forma robusta.
const emailValido = (email) =>
    typeof email === 'string' && validator.isEmail(email.trim());

module.exports = { limpiarTexto, emailValido };
