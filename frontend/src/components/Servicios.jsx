import { Hammer, Sparkles, Wrench, Droplets } from 'lucide-react';

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

export default function Servicios() {
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
            </div>
        </section>
    );
}