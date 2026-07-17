import { ImageIcon } from 'lucide-react';

// TODO: reemplazar por fotos reales de trabajos.
// Las imágenes van en src/assets/ y se importan arriba, así:
// import trabajo1 from '../assets/trabajo1.jpg';
// Después, en cada objeto, agregá: imagen: trabajo1
const trabajos = [
    { id: 1, titulo: 'Desabolladura y pintura', descripcion: 'Reparación de lateral completo' },
    { id: 2, titulo: 'Detailing', descripcion: 'Pulido y restauración de brillo' },
    { id: 3, titulo: 'Instalación de accesorios', descripcion: 'Equipamiento a medida' },
    { id: 4, titulo: 'Lavado premium', descripcion: 'Interior y exterior' },
    { id: 5, titulo: 'Pintura completa', descripcion: 'Cambio de color de fábrica' },
    { id: 6, titulo: 'Detailing de interior', descripcion: 'Tapizados y plásticos' }
];

export default function Galeria() {
    return (
        <section id="galeria" className="bg-neutral-900 py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-2xl mb-16">
                    <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
                        Galería
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Nuestros trabajos
                    </h2>
                    <p className="text-neutral-400">
                        Los resultados hablan mejor que las palabras.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trabajos.map((trabajo) => (
                        <figure
                            key={trabajo.id}
                            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 aspect-4/3"
                        >
                            {/* Placeholder: reemplazar por <img src={trabajo.imagen} alt={trabajo.titulo} /> */}
                            <div className="w-full h-full flex flex-col items-center justify-center text-neutral-700">
                                <ImageIcon size={40} />
                                <span className="text-xs mt-2">Foto pendiente</span>
                            </div>

                            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-neutral-950 to-transparent p-5">
                                <h3 className="font-semibold text-white text-sm">{trabajo.titulo}</h3>
                                <p className="text-xs text-neutral-400">{trabajo.descripcion}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}