export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <span className="text-xl font-bold text-blue-400">MiProyecto</span>
      <div className="flex gap-4 text-sm text-slate-300">
        <a href="#" className="hover:text-white transition-colors">Inicio</a>
        <a href="#" className="hover:text-white transition-colors">Panel</a>
      </div>
    </nav>
  );
}