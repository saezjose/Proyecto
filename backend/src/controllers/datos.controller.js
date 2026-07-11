// Controlador: contiene la lógica de cada endpoint

const obtenerDatos = (req, res) => {
    res.json({
        mensaje: "¡Conexión exitosa con el backend de Express!",
        status: "OK"
    });
};

module.exports = {
    obtenerDatos
};