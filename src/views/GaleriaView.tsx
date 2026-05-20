export default function GaleriaView() {
  const fotos = [
    { 
      src: '/images/imagen2.jpeg', 
      Titulo: 'Andamiaje Perimetral Seguro',
      tag: 'Seguridad Operativa',
      desc: 'Montaje estructural certificado para frentes de trabajo en alturas. Garantiza la integridad de nuestro personal técnico y agiliza la aplicación vertical de acabados.' 
    },
    { 
      src: '/images/imagen3.jpeg', 
      Titulo: 'Acabados en Manto Asfáltico',
      tag: 'Impermeabilización',
      desc: 'Termofusión técnica de mantos prefabricados Fester. Asegura un sellado hermético milimétrico en uniones y bajadas pluviales críticas contra lluvias torrenciales.' 
    },
    { 
      src: '/images/imagen5.jpeg', 
      Titulo: 'Preparación Técnica de Superficies',
      tag: 'Control de Calidad',
      desc: 'Limpieza profunda estructural mediante hidrolavado a presión y calafateo de grietas. El paso fundamental indispensable para lograr la máxima adherencia de los sistemas.' 
    },
    { 
      src: '/images/imagen9.jpeg', 
      Titulo: 'Sistemas de Rapel Industrial',
      tag: 'Frente Técnico Activo',
      desc: 'Maniobras especializadas con equipo de alpinismo industrial para el sellado de juntas y pintura exterior en fachadas complejas de edificios residenciales.' 
    }
  ];

  return (
    <div className="pt-20 pb-24 max-w-7xl mx-auto px-4 bg-slate-50/50 min-h-screen">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#154A94] uppercase tracking-wide">
          Evidencia de Obra y Control de Calidad
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium max-w-xl mx-auto leading-relaxed">
          Fotografías reales e inspecciones técnicas de nuestros frentes operativos activos en Acapulco.
        </p>
        <div className="w-24 h-1 bg-[#E05600] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {fotos.map((foto, idx) => (
          <div 
            key={idx} 
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >

            <img 
              src={foto.src} 
              alt={foto.Titulo} 
              className="w-full h-full object-cover transition-all duration-750 ease-in-out group-hover:scale-110 group-hover:blur-[1px] group-hover:opacity-40" 
            />

            <div className="absolute inset-0  from-slate-950/90 via-slate-890/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-20"></div>

            <div className="absolute inset-0 from-[#154A94]/80 to-slate-895/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <span className="absolute top-4 left-4 bg-[#154A94] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm z-20 transition-all duration-300 group-hover:bg-[#E05600]">
              {foto.tag}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform transition-transform duration-300">

              <h3 className="text-xl font-black text-white uppercase tracking-wide drop-shadow-sm group-hover:text-[#E05600] transition-colors duration-300">
                {foto.Titulo}
              </h3>

              <div className="w-12 h-0.5 bg-[#E05600] my-3 transition-all duration-500 group-hover:w-28"></div>

              <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-normal max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {foto.desc}
              </p>

              <div className="absolute bottom-6 right-6 text-white/30 group-hover:text-white transition-colors duration-300 hidden sm:block">
                <span className="material-icons text-xl select-none">photo_camera</span>
              </div>

            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}