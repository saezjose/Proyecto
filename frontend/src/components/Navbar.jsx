import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NEGOCIO } from '../config/negocio';

const enlaces = [
    { href: '#inicio', texto: 'Inicio' },
    { href: '#servicios', texto: 'Servicios' },
    { href: '#nosotros', texto: 'Nosotros' },
    { href: '#galeria', texto: 'Galería' },
    { href: '#contacto', texto: 'Contacto' }
];

export default function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-neutral-800">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a
                    href="#inicio"
                    className="text-xl font-bold text-white tracking-tight"
                >
                    {NEGOCIO.nombre.split(' ')[0]}
                    <span className="text-orange-500">
                        {' '}
                        {NEGOCIO.nombre.split(' ')[1]}
                    </span>
                </a>

                {/* Menú escritorio */}
                <ul className="hidden md:flex gap-8">
                    {enlaces.map((enlace) => (
                        <li key={enlace.href}>
                            <a
                                href={enlace.href}
                                className="text-sm text-neutral-300 hover:text-orange-500 transition-colors"
                            >
                                {enlace.texto}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botón menú móvil */}
                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden text-white cursor-pointer"
                    aria-label="Abrir menú"
                >
                    {menuAbierto ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Menú móvil */}
            {menuAbierto && (
                <ul className="md:hidden bg-neutral-950 border-t border-neutral-800 px-4 py-4 space-y-3">
                    {enlaces.map((enlace) => (
                        <li key={enlace.href}>
                            <a
                                href={enlace.href}
                                onClick={() => setMenuAbierto(false)}
                                className="block text-neutral-300 hover:text-orange-500 transition-colors"
                            >
                                {enlace.texto}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}