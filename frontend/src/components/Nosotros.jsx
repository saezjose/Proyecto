import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const valores = [
    {
        icono: ShieldCheck,
        titulo: 'Trabajo garantizado',
        texto: 'Cada reparación se entrega revisada. Si algo no quedó bien, lo resolvemos.'
    },
    {
        icono: Clock,
        titulo: 'Plazos que se cumplen',
        texto: 'Te decimos cuándo está listo y lo cumplimos. Sin sorpresas ni demoras eternas.'
    },
    {
        icono: ThumbsUp,
        titulo: 'Presupuesto claro',
        texto: 'Sabés cuánto vas a pagar antes de que empecemos. Sin costos ocultos.'
    }
];

export default function Nosotros() {
    return (
        <section id="nosotros" className="bg-neutral-950 py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
                            Nosotros
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Tu auto, en manos que saben lo que hacen
                        </h2>
                        <p className="text-neutral-400 mb-4 leading-relaxed">
                            En Escobar Garage entendemos que dejar el auto en un taller es un acto de
                            confianza. Por eso trabajamos con transparencia: te explicamos qué tiene,
                            qué se puede hacer y cuánto cuesta, antes de tocar nada.
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            Somos un taller de Estación Central, y la mayoría de nuestros clientes
                            vuelve o nos recomienda. Esa es la mejor carta de presentación que tenemos.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {valores.map((valor) => {
                            const Icono = valor.icono;
                            return (
                                <div
                                    key={valor.titulo}
                                    className="flex gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-6"
                                >
                                    <div className="shrink-0 w-11 h-11 rounded-lg bg-orange-600/10 flex items-center justify-center">
                                        <Icono className="text-orange-500" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{valor.titulo}</h3>
                                        <p className="text-sm text-neutral-400">{valor.texto}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}