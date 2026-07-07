
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
      <Navbar /> 
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 text-center max-w-md">
        <h1 className="text-3xl font-extrabold text-blue-500 mb-4">
          ¡Entorno Completo!
        </h1>
        <p className="text-slate-400 mb-6">
          Node, Express, Vite, React y Tailwind CSS v4 están corriendo e integrados sin errores.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer">
          Listo para picar código
        </button>
      </div>
    </div>
  );
}