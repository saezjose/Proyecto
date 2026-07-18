// Datos de Escobar Garage. Todo dato del negocio se edita ACÁ, no en los componentes.

export const NEGOCIO = {
    nombre: 'Escobar Garage',
    descripcion: 'Taller automotriz integral en Estación Central',

    whatsapp: '56949500257',
    mensajeWhatsapp: 'Hola! Quiero consultar por un servicio.',

    direccion: 'Av. Ecuador 4321',
    comuna: 'Estación Central',
    region: 'Región Metropolitana',

    
    horario: {
        semana: 'Lunes a Viernes: 9:00 - 19:00',
        sabado: 'Sábado: 9:00 - 14:00',
        domingo: 'Domingo: Cerrado'
    },

    redes: {
        instagram: 'https://www.instagram.com/deg.garage',
        facebook: null
    },

    // TODO: reemplazar por el email real
    email: 'contacto@escobargarage.cl'
};

// Arma el link de WhatsApp con el mensaje pre-cargado
export const linkWhatsapp = () =>
    `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(NEGOCIO.mensajeWhatsapp)}`;