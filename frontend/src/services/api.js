// Servicio: toda la comunicación con la API del backend vive acá.

const API_URL = 'http://localhost:3001/api';

// Envía un contacto nuevo (POST /api/contactos)
export const enviarContacto = async (datos) => {
    const respuesta = await fetch(`${API_URL}/contactos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(resultado.error || 'Error al enviar el contacto.');
    }

    return resultado;
};

// Obtiene todos los contactos (GET /api/contactos)
export const obtenerContactos = async () => {
    const respuesta = await fetch(`${API_URL}/contactos`);

    if (!respuesta.ok) {
        throw new Error('Error al obtener los contactos.');
    }

    return respuesta.json();
};