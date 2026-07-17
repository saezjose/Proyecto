import { useState } from 'react';
import { MapPin, Clock, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { NEGOCIO, linkWhatsapp } from '../config/negocio';
import { enviarContacto } from '../services/api';

const FORMULARIO_VACIO = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
};

export default function Contacto() {
    const [formulario, setFormulario] = useState(FORMULARIO_VACIO);
    const [errores, setErrores] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [estado, setEstado] = useState(null);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value,
        }));

        if (errores[name]) {
            setErrores((anterior) => ({
                ...anterior,
                [name]: undefined,
            }));
        }
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!formulario.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        } else if (formulario.nombre.trim().length < 2) {
            nuevosErrores.nombre = 'El nombre es demasiado corto.';
        }

        if (!formulario.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email.trim())) {
            nuevosErrores.email = 'El email no tiene un formato válido.';
        }

        if (!formulario.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es obligatorio.';
        } else if (formulario.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'Contanos un poco más (mínimo 10 caracteres).';
        }

        return nuevosErrores;
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();

        setEstado(null);

        const nuevosErrores = validar();
        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length > 0) {
            return;
        }

        setEnviando(true);

        try {
            await enviarContacto({
                nombre: formulario.nombre.trim(),
                email: formulario.email.trim(),
                telefono: formulario.telefono.trim(),
                mensaje: formulario.mensaje.trim(),
            });

            setFormulario(FORMULARIO_VACIO);
            setEstado({
                tipo: 'exito',
                texto: '¡Mensaje enviado! Te vamos a responder a la brevedad.',
            });
        } catch (error) {
            setEstado({
                tipo: 'error',
                texto: error.message || 'No pudimos enviar tu mensaje. Intentá de nuevo.',
            });
        } finally {
            setEnviando(false);
        }
    };

    const claseInput = (campo) =>
        `w-full bg-neutral-900 border rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
            errores[campo]
                ? 'border-red-600 focus:border-red-500'
                : 'border-neutral-800 focus:border-orange-600'
        }`;

    return (
        <section id="contacto" className="bg-neutral-950 py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-2xl mb-16">
                    <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
                        Contacto
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Contanos qué necesita tu auto
                    </h2>
                    <p className="text-neutral-400">
                        Escribinos y te respondemos con un presupuesto claro.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <form className="space-y-5" onSubmit={manejarEnvio} noValidate>
                        <div>
                            <label htmlFor="nombre" className="block text-sm text-neutral-300 mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={manejarCambio}
                                disabled={enviando}
                                className={claseInput('nombre')}
                                placeholder="Tu nombre"
                            />
                            {errores.nombre && (
                                <p className="text-red-500 text-sm mt-2">{errores.nombre}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-neutral-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formulario.email}
                                onChange={manejarCambio}
                                disabled={enviando}
                                className={claseInput('email')}
                                placeholder="tu@email.com"
                            />
                            {errores.email && (
                                <p className="text-red-500 text-sm mt-2">{errores.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="telefono" className="block text-sm text-neutral-300 mb-2">
                                Teléfono <span className="text-neutral-600">(opcional)</span>
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formulario.telefono}
                                onChange={manejarCambio}
                                disabled={enviando}
                                className={claseInput('telefono')}
                                placeholder="+56 9 1234 5678"
                            />
                        </div>

                        <div>
                            <label htmlFor="mensaje" className="block text-sm text-neutral-300 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows={5}
                                value={formulario.mensaje}
                                onChange={manejarCambio}
                                disabled={enviando}
                                className={`${claseInput('mensaje')} resize-none`}
                                placeholder="Contanos qué necesita tu auto..."
                            />
                            {errores.mensaje && (
                                <p className="text-red-500 text-sm mt-2">{errores.mensaje}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={enviando}
                            className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors cursor-pointer"
                        >
                            {enviando ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar mensaje'
                            )}
                        </button>

                        {estado && (
                            <div
                                role="status"
                                className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
                                    estado.tipo === 'exito'
                                        ? 'bg-green-950 border border-green-800 text-green-300'
                                        : 'bg-red-950 border border-red-800 text-red-300'
                                }`}
                            >
                                {estado.tipo === 'exito' ? (
                                    <CheckCircle2 size={20} className="shrink-0" />
                                ) : (
                                    <AlertCircle size={20} className="shrink-0" />
                                )}
                                <span>{estado.texto}</span>
                            </div>
                        )}
                    </form>

                    <div className="space-y-6">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                            <div className="flex gap-4">
                                <MapPin className="text-orange-500 shrink-0" size={22} />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Dónde estamos</h3>
                                    <p className="text-sm text-neutral-400">
                                        {NEGOCIO.direccion}
                                        <br />
                                        {NEGOCIO.comuna}, {NEGOCIO.region}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                            <div className="flex gap-4">
                                <Clock className="text-orange-500 shrink-0" size={22} />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Horarios</h3>
                                    <p className="text-sm text-neutral-400">
                                        {NEGOCIO.horario.semana}
                                        <br />
                                        {NEGOCIO.horario.sabado}
                                        <br />
                                        {NEGOCIO.horario.domingo}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a
                        
                            href={linkWhatsapp()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-neutral-900 border border-neutral-800 hover:border-orange-600 text-white font-semibold py-4 rounded-xl transition-colors"
                        >
                            <MessageCircle size={20} className="text-orange-500" />
                            Escribinos por WhatsApp
                        </a>

                        {/* El mapa de Google Maps se agrega en la Parte 16 */}
                    </div>
                </div>
            </div>
        </section>
    );
}