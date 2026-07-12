// Layout principal: la estructura que envuelve a todas las páginas.
// En la Parte 14 acá van a vivir el Navbar y el Footer.

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Acá irá el <Navbar /> en la Parte 14 */}

            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Acá irá el <Footer /> en la Parte 14 */}
        </div>
    );
}