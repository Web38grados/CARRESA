import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const linkStyle = (path: string) => {
    const base = "px-3 py-2 font-semibold text-sm transition-all duration-300 transform hover:scale-105 inline-block ";
    return location.pathname === path 
      ? base + "text-[#E05600] font-bold border-b-4 border-[#E05600]" 
      : base + "text-slate-700 hover:text-[#154A94]";
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } shadow-md`}
    >
      <div className="bg-[#154A94] text-white text-xs py-2 border-b border-white/10 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          
          <a href="tel:7444857582" className="flex items-center gap-1.5 hover:text-[#E05600] transition-colors duration-300">
            <span className="material-icons text-sm text-slate-200">phone</span>
            <span>Atención al cliente y ventas: 744 485 7582</span>
          </a>
          
          <a href="https://wa.me/527444003040" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors duration-300">
            <span className="material-icons text-sm text-[#25D366]">chat</span>
            <span>WhatsApp: 744 400 3040</span>
          </a>
          
        </div>
      </div>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          <div className="flex flex-col transform hover:scale-105 transition-transform duration-300">
            <Link to="/" className="text-2xl font-black tracking-wider text-[#154A94]">CARRESA</Link>
            <span className="text-[10px] uppercase tracking-widest text-[#E05600] font-bold -mt-1">Impermeabilizaciones & Pinturas</span>
          </div>

          <nav className="hidden md:flex space-x-2 items-center">
            <Link to="/" className={linkStyle('/')}>Inicio</Link>
            <Link to="/servicios" className={linkStyle('/servicios')}>Servicios</Link>
            <Link to="/productos" className={linkStyle('/productos')}>Productos</Link>
            <Link to="/galeria" className={linkStyle('/galeria')}>Galería</Link>
            <Link to="/novedades" className={linkStyle('/novedades')}>Tips & Novedades</Link>
            
            <Link 
              to="/contacto" 
              className="bg-[#E05600] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#E05600]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 ml-4">
              Contactar
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}