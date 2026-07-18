import { useState, useEffect } from 'react';
import { Hammer, Sparkles, Wrench, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

import mustangNegro from '../assets/servicios/mustang-negro.jpg';
import tapabarroNegro from '../assets/servicios/tapabarro-negro.jpg';
import mercedesCola from '../assets/servicios/mercedes-cola.jpg';
import mercedesLlantas from '../assets/servicios/mercedes-llantas.jpg';
import mercedesParachoque from '../assets/servicios/mercedes-parachoque.jpg';
import capoPlateado from '../assets/servicios/capo-plateado.jpg';
import capoNegro from '../assets/servicios/capo-negro.jpg';

const servicios = [
    {
        icono: Hammer,
        titulo: 'Desabolladura y pintura',
        descripcion:
            'Reparación de golpes, abolladuras y rayones. Pintura con igualación de color y terminación de fábrica.'
    },
    {
        icono: Sparkles,
        titulo: 'Detailing',
        descripcion:
            'Pulido, restauración de brillo y tratamiento de superficies. Tu auto recupera el aspecto de cero kilómetro.'
    },
    {
        icono: Wrench,
        titulo: 'Venta e instalación de accesorios',
        descripcion:
            'Accesorios de calidad instalados por especialistas. Asesoramiento según tu vehículo y tu presupuesto.'
    },
    {
        icono: Droplets,
        titulo: 'Lavados',
        descripcion:
            'Lavado exterior e interior con productos profesionales. Rápido, prolijo y sin dañar la pintura.'
    }
];

const trabajos = [
    { img: mustangNegro, alt: 'Trabajo de pintura en Mustang negro' },
    { img: tapabarroNegro, alt: 'Reparación de tapabarro' },
    { img: mercedesCola, alt: 'Trabajo en la cola de un Mercedes' },
    { img: mercedesLlantas, alt: 'Detailing de llantas' },
    { img: mercedesParachoque, alt: 'Reparación de parachoque' },
    { img: capoPlateado, alt: 'Pintura de capó plateado' },
    { img: capoNegro, alt: 'Pintura de capó negro' }
];

export default function Servicios() {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActual((anterior) => (anterior + 1) % trabajos.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const anterior = () => {
        setActual((i) => (i - 1 + trabajos.length) % trabajos.length);
    };

    const siguiente = () => {
        setActual((i) => (i + 1) % trabajos.length);
    };

    return (
        <section id="servicios" className="bg-neutral-900 py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-2xl mb-16">
                    <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
                        Servicios
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Un taller integral
                    </h2>
                    <p className="text-neutral-400">
                        No importa si tu auto necesita una reparación grande o solo una puesta a punto:
                        acá encontrás todo, sin dar vueltas por distintos talleres.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicios.map((servicio) => {
                        const Icono = servicio.icono;
                        return (
                            <article
                                key={servicio.titulo}
                                className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-orange-600 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-orange-600/10 flex items-center justify-center mb-5">
                                    <Icono className="text-orange-500" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {servicio.titulo}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {servicio.descripcion}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Carrusel de trabajos realizados */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Trabajos realizados
                    </h3>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="overflow-hidden rounded-xl border border-neutral-800 aspect-video">
                            {trabajos.map((trabajo, indice) => (
                                <img
                                    key={indice}
                                    src={trabajo.img}
                                    alt={trabajo.alt}
                                    loading="lazy"
                                    className={`w-full h-full object-cover transition-opacity duration-700 ${
                                        indice === actual ? 'opacity-100' : 'opacity-0 hidden'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={anterior}
                            aria-label="Trabajo anterior"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-950/70 border border-neutral-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={siguiente}
                            aria-label="Trabajo siguiente"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-950/70 border border-neutral-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="flex justify-center gap-2 mt-5">
                            {trabajos.map((_, indice) => (
                                <button
                                    key={indice}
                                    onClick={() => setActual(indice)}
                                    aria-label={`Ir al trabajo ${indice + 1}`}
                                    className={`h-2 rounded-full transition-all ${
                                        indice === actual
                                            ? 'w-8 bg-orange-500'
                                            : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}