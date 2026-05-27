import { useState } from 'react';

interface Obra {
  src: string;
  Titulo: string;
  tag: string;
  desc: string;
  empresa: string;
  ubicacion: string;
  fecha: string;
  detallesExtendidos: string;
  imagenesGaleria: string[];
}

export default function GaleriaView() {
  const [obraSeleccionada, setObraSeleccionada] = useState<Obra | null>(null);
  const [fotoActivaIndex, setFotoActivaIndex] = useState<number>(0);

  const fotos: Obra[] = [
    { 
      src: '/images/imagen2.jpeg', 
      Titulo: 'Andamiaje Perimetral Seguro',
      tag: 'Seguridad Operativa',
      desc: 'Montaje estructural certificado para frentes de trabajo en alturas. Garantiza la integridad de nuestro personal técnico y agiliza la aplicación vertical de acabados.',
      empresa: 'Hoteles del Pacífico S.A. (Sede Acapulco)',
      ubicacion: 'Zona Dorada, Acapulco',
      fecha: 'Febrero 2026',
      detallesExtendidos: 'Proyecto de montaje masivo que abarcó más de 2,500 m² de fachada activa. Se utilizaron andamios multidireccionales certificados bajo normas internacionales de seguridad, permitiendo resanes estructurales simultáneos, lavado hidrodinámico y aplicación Airless sin reportar incidencias operativas.',
      imagenesGaleria: [
        '/images/galeria_andamio1.jpg',
        '/images/galeria_andamio2.jpg',
        '/images/galeria_andamio3.jpg',
        '/images/galeria_andamio4.jpg',
        '/images/galeria_andamio5.jpg',
        '/images/galeria_andamio6.jpg',
      ]
    },
    { 
      src: '/images/imagen3.jpeg', 
      Titulo: 'Acabados en Manto Asfáltico',
      tag: 'Impermeabilización',
      desc: 'Termofusión técnica de mantos prefabricados Fester. Asegura un sellado hermético milimétrico en uniones y bajadas pluviales críticas contra lluvias torrenciales.',
      empresa: 'Centro Comercial Plaza Diamante',
      ubicacion: 'Acapulco Diamante',
      fecha: 'Marzo 2026',
      detallesExtendidos: 'Intervención mayor de cubiertas comerciales de gran escala. Se removieron sistemas colapsados anteriores mediante raspado mecánico y se procedió a la colocación por termofusión controlada de mantos prefabricados SBS de 4.5mm. Se reforzaron meticulosamente más de 80 bajadas pluviales y canalones perimetrales.',
      imagenesGaleria: [
        '/images/galeria_manto1.jpg',
        '/images/galeria_manto2.jpg',
        '/images/galeria_manto3.jpg'
      ]
    },
    { 
      src: '/images/imagen5.jpeg', 
      Titulo: 'Preparación Técnica de Superficies',
      tag: 'Control de Calidad',
      desc: 'Limpieza profunda estructural mediante hidrolavado a presión y calafateo de grietas. El paso fundamental indispensable para lograr la máxima adherencia de los sistemas.',
      empresa: 'Condominios Torres del Sol',
      ubicacion: 'Fraccionamiento Las Playas',
      fecha: 'Abril 2026',
      detallesExtendidos: 'Tratamiento correctivo previo a la pintura y sellado de muros con afectaciones severas por humedad marina y desprendimiento de revoques. Eliminación total de hongos, aplicación de inhibidores de salitre y calafateo elástico estructural en juntas de dilatación dinámica.',
      imagenesGaleria: [
        '/images/galeria_preparacion1.jpg',
        '/images/galeria_preparacion2.jpg',
        '/images/galeria_preparacion3.jpg',
        '/images/galeria_preparacion4.jpg',
        '/images/galeria_preparacion5.jpg',
        '/images/galeria_preparacion6.jpg'
      ]
    },
    { 
      src: '/images/imagen9.jpeg', 
      Titulo: 'Reparación y pintura',
      tag: 'Reparación y Pintura',
      desc: 'Maniobras especializadas con equipo de alpinismo industrial para el sellado de juntas y pintura exterior en fachadas complejas de edificios residenciales.',
      empresa: 'Residencial Peninsula Overlook',
      ubicacion: 'Punta Diamante',
      fecha: 'Mayo 2026',
      detallesExtendidos: 'Despliegue de cuadrillas especializadas en trabajos verticales certificados. Se cubrieron áreas de difícil acceso arquitectónico aplicando esmaltes y recubrimientos elastoméricos de alta densidad con resistencia UV, asegurando un acabado homogéneo frente a las condiciones severas del clima costero.',
      imagenesGaleria: [
        '/images/galeria_pintura1.jpg',
        '/images/galeria_pintura2.jpg',
        '/images/galeria_pintura3.jpg',
        '/images/galeria_pintura4.jpg',
        '/images/galeria_pintura5.jpg'
      ]
    }
  ];

  const abrirModal = (obra: Obra) => {
    setObraSeleccionada(obra);
    setFotoActivaIndex(0);
  };

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
            onClick={() => abrirModal(foto)}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <img 
              src={foto.src} 
              alt={foto.Titulo} 
              className="w-full h-full object-cover transition-all duration-750 ease-in-out group-hover:scale-110 group-hover:blur-[1px] group-hover:opacity-40" 
            />
            <div className="absolute inset-0 from-slate-950/90 via-slate-800/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="absolute inset-0 from-[#154A94]/80 to-slate-900/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <span className="absolute top-4 left-4 bg-[#154A94] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm z-20 transition-all duration-300 group-hover:bg-[#E05600]">
              {foto.tag}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <h3 className="text-xl font-black text-white uppercase tracking-wide drop-shadow-sm group-hover:text-[#E05600] transition-colors duration-300">
                {foto.Titulo}
              </h3>
              <div className="w-12 h-0.5 bg-[#E05600] my-3 transition-all duration-500 group-hover:w-28"></div>
              <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-normal max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {foto.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {obraSeleccionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col animate-scale-up">

            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div>
                <span className="bg-[#E05600] text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider mr-2">
                  {obraSeleccionada.tag}
                </span>
                <h3 className="text-base md:text-lg font-black uppercase tracking-wide inline-block align-middle mt-1 md:mt-0">
                  {obraSeleccionada.Titulo}
                </h3>
              </div>
              <button 
                onClick={() => setObraSeleccionada(null)}
                className="bg-slate-800 hover:bg-[#E05600] text-white p-2 rounded-xl transition-colors focus:outline-none flex items-center justify-center"
              >
                <span className="material-icons text-base select-none">close</span>
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 overflow-y-auto text-sm text-slate-700">
              
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex gap-2.5 items-start">
                  <span className="material-icons text-[#E05600] text-lg select-none mt-0.5">business</span>
                  <div>
                    <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-0.5">Cliente Corporativo:</p>
                    <p className="text-slate-700 text-xs md:text-sm font-bold leading-tight">{obraSeleccionada.empresa}</p>
                    <p className="text-slate-400 text-[11px] flex items-center gap-0.5 mt-0.5">
                      <span className="material-icons text-xs">location_on</span> {obraSeleccionada.ubicacion}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="material-icons text-[#154A94] text-lg select-none mt-0.5">calendar_today</span>
                  <div>
                    <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-0.5">Fecha de Entrega / Ejecución:</p>
                    <p className="text-slate-700 text-xs md:text-sm font-semibold">{obraSeleccionada.fecha}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100/50">
                <h4 className="text-xs font-bold text-[#154A94] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <span className="material-icons text-sm">description</span> Reporte Técnico de Bitácora
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium text-xs md:text-sm">
                  {obraSeleccionada.detallesExtendidos}
                </p>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1">
                  <span className="material-icons text-sm text-[#154A94]">collections</span> 
                  Registro Fotográfico de Alta Resolución
                </h4>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 rounded-xl overflow-hidden border border-slate-200 shadow-inner group/viewer">
                  <img 
                    src={obraSeleccionada.imagenesGaleria[fotoActivaIndex]} 
                    alt={`Evidencia ${fotoActivaIndex + 1}`} 
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                    FOTO {fotoActivaIndex + 1} DE {obraSeleccionada.imagenesGaleria.length}
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 bg-slate-100 p-2.5 rounded-xl border border-slate-200/50">
                  {obraSeleccionada.imagenesGaleria.map((imgSrc, index) => (
                    <button
                      key={index}
                      onClick={() => setFotoActivaIndex(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        fotoActivaIndex === index 
                          ? 'border-[#E05600] scale-95 shadow-md opacity-100' 
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={imgSrc} 
                        alt="Miniatura" 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end shrink-0">
              <a 
                href={`https://wa.me/527444003040?text=Hola,%20solicito%20información%20sobre%20proyectos%20similares%20a:%20${encodeURIComponent(obraSeleccionada.Titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-1.5 tracking-wide"
              >
                <span className="material-icons text-base select-none">chat</span>
                SOLICITAR PROYECTO SIMILAR
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}