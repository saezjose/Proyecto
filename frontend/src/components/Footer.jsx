import { MapPin, Clock, Mail } from 'lucide-react';
import { SiInstagram, SiFacebook } from '@icons-pack/react-simple-icons';
import { NEGOCIO } from '../config/negocio';

export default function Footer() {
    const anioActual = new Date().getFullYear();

    const links = [
        { href: '#servicios', texto: 'Servicios' },
        { href: '#nosotros', texto: 'Nosotros' },
        { href: '#galeria', texto: 'Galería' },
        { href: '#contacto', texto: 'Contacto' },
    ];

    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 py-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Columna 1: marca + descripción + redes */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            {NEGOCIO.nombre.split(' ')[0]}
                            <span className="text-orange-500"> {NEGOCIO.nombre.split(' ')[1]}</span>
                        </h3>
                        <p className="text-sm text-neutral-400 mb-6 max-w-xs">
                            {NEGOCIO.descripcion}
                        </p>

                        <div className="flex gap-3">
                            {NEGOCIO.redes.instagram && (
                                <a
                                    href={NEGOCIO.redes.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-orange-500 hover:border-orange-600 transition-colors"
                                >
                                    <SiInstagram size={20} />
                                </a>
                            )}

                            {NEGOCIO.redes.facebook && (
                                <a
                                    href={NEGOCIO.redes.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-orange-500 hover:border-orange-600 transition-colors"
                                >
                                    <SiFacebook size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Columna 2: navegación */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-orange-500 transition-colors"
                                    >
                                        {link.texto}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: contacto */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                            Dónde estamos
                        </h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-orange-500 shrink-0" />
                                <span>
                                    {NEGOCIO.direccion}, {NEGOCIO.comuna}
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Clock size={18} className="text-orange-500 shrink-0" />
                                <span>{NEGOCIO.horario.semana}</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-orange-500 shrink-0" />
                                <a
                                    href={`mailto:${NEGOCIO.email}`}
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    {NEGOCIO.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Barra inferior */}
                <div className="border-t border-neutral-800 mt-12 pt-8">
                    <p className="text-sm text-neutral-500 text-center">
                        © {anioActual} {NEGOCIO.nombre}. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}