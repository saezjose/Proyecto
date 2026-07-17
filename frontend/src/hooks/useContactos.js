// Hook personalizado: encapsula la lógica de obtener contactos de la API.

import { useState, useEffect } from 'react';
import { obtenerContactos } from '../services/api';

export function useContactos() {
    const [contactos, setContactos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarContactos = async () => {
            try {
                setCargando(true);
                const datos = await obtenerContactos();
                setContactos(datos);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        cargarContactos();
    }, []);

    return { contactos, cargando, error };
}