import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#154A94] text-slate-200 text-sm border-t-2 border-[#E05600]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col gap-2">
          <h4 className="text-white text-lg font-black tracking-wider">CARRESA</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Soluciones de ingeniería y aplicación técnica profesional en recubrimientos, impermeabilizaciones estructurales y acabados arquitectónicos de alta resistencia.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-[#E05600]">
            Navegación Rápida
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-xs">
            <li>
              <Link to="/" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Servicios
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Productos
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Galería
              </Link>
            </li>
            <li>
              <Link to="/novedades" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Novedades
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white flex items-center gap-1 transition-all duration-200 transform hover:translate-x-1">
                <span className="material-icons text-xs text-slate-300/60 select-none">chevron_right</span> Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-xs space-y-2.5">
          <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-white">
            Contacto Comercial
          </h4>
          <p className="flex items-center gap-2">
            <span className="material-icons text-slate-300 text-sm select-none">place</span> 
            <span>Acapulco, Guerrero, México</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="material-icons text-slate-300 text-sm select-none">email</span> 
            <a href="mailto:carresaaca@gmail.com" className="hover:text-white transition-colors">carresaaca@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="border-t border-[#103E7A] py-4 bg-[#103E7A] text-center text-xs text-slate-300/80">
        &copy; {new Date().getFullYear()} CARRESA. Todos los derechos reservados.
      </div>
    </footer>
  );
}