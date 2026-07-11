import { useState } from "react";
export default function App() {
  const [colorActivo, setColorActivo] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 text-center max-w-md">
        <h1 className="text-3xl font-extrabold text-blue-500 mb-4">
          ¡Entorno Completo!
        </h1>
        <p className="text-slate-400 mb-6">
          Node, Express, Vite, React y Tailwind CSS v4 están corriendo e integrados sin errores.
        </p>

        <button
          onClick={() => setColorActivo(!colorActivo)}
          className={`font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer ${
            colorActivo ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {colorActivo ? "¡Color cambiado!" : "Listo para picar código"}
        </button>
      </div>
    </div>
  );
}