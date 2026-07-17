import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Nosotros from '../components/Nosotros';
import Galeria from '../components/Galeria';
import Contacto from '../components/Contacto';

export default function Home() {
    return (
        <>
            <Hero />
            <Servicios />
            <Nosotros />
            <Galeria />
            <Contacto />
        </>
    );
}