import { MessageCircle } from 'lucide-react';
import { NEGOCIO, linkWhatsapp } from '../config/negocio';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center bg-neutral-950 pt-16"
        >
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="max-w-3xl">
                    <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-4">
                        {NEGOCIO.comuna}, Santiago
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Todo lo que tu auto necesita,{' '}
                        <span className="text-orange-500">en un solo lugar</span>
                    </h1>

                    <p className="text-lg text-neutral-400 mb-10 max-w-xl">
                        Desabolladura y pintura, detailing, accesorios y lavados.
                        Trabajo prolijo, plazos claros y tu auto como nuevo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={linkWhatsapp()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            <MessageCircle size={20} />
                            Cotizar por WhatsApp
                        </a>

                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Ver servicios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}