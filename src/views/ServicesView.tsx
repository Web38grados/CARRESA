import { useState } from 'react';

interface Servicio {
  titulo: string;
  desc: string;
  icono: string;
  imagen: string;
  tiempo: string;
  materiales: string;
  garantia: string;
  detalles: string;
}

export default function ServicesView() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null);

  const listaServicios: Servicio[] = [
    { 
      titulo: "Trabajos de Impermeabilización", 
      desc: "Aplicación experta contra filtraciones y humedades en losas, techos, azoteas y cisternas utilizando sistemas acrílicos, prefabricados y mantos asfálticos de alta gama.", 
      icono: "construction",
      imagen: "/images/imagen16.jpeg",
      tiempo: "2 a 5 días hábiles (Dependiendo de la extensión en m² y condiciones climáticas).",
      materiales: "Fester Acriton, Mantos Prefabricados Fester, Imprimantes Asfálticos e Hidrofugantes cementosos.",
      garantia: "Garantía por escrito de 3, 5, 7 o hasta 10 años según el sistema seleccionado.",
      detalles: "El proceso incluye lavado por hidrolavadora a presión, calafateo técnico de grietas críticas, aplicación de pasadas cruzadas de impermeabilizante y refuerzo estructural con malla de poliéster multidireccional."
    },
    { 
      titulo: "Pintura en Fachadas e Interiores", 
      desc: "Especialistas en acabados de exteriores, igualación de tonos corporativos y aplicación de pintura vertical en altura garantizando máxima durabilidad contra el clima costero.", 
      icono: "palette",
      imagen: "/images/imagen6.jpeg",
      tiempo: "3 a 7 días dependiendo de la altura, niveles del edificio y preparación previa requerida.",
      materiales: "Pinturas e imper-pinturas acrílicas de alta densidad con resiliencia UV y selladores antihumedad.",
      garantia: "Hasta 5 años contra desprendimiento y decoloración prematura provocada por salitre.",
      detalles: "Especializados en trabajos verticales con andamiaje seguro y equipo de pintura Airless para acabados uniformes. Incluye el sellado completo de porosidades microscópicas y resane de descarapelamientos."
    },
    { 
      titulo: "Suministro y Distribución de Material", 
      desc: "Comercializamos materiales y sistemas de impermeabilización directo a tu obra con el respaldo oficial de las mejores marcas y asesoramiento técnico en sitio.", 
      icono: "local_shipping",
      imagen: "/images/imagen7.jpeg",
      tiempo: "Entrega inmediata en Acapulco (Mismo día o máximo 24 horas para stock de catálogo).",
      materiales: "Gama completa de soluciones Fester, aditivos para concreto, selladores elásticos y herramientas.",
      garantia: "Garantía de fábrica directa sobre lotes y sellos de seguridad originales vigentes.",
      detalles: "Contamos con logística optimizada para trasladar volúmenes industriales o residenciales directo a pie de obra. Ofrecemos cuantificación de materiales sin costo mediante planos o levantamiento técnico."
    },
    { 
      titulo: "Remodelaciones de Inmuebles", 
      desc: "Ejecución completa de obra civil menor, acabados arquitectónicos, tablaroca y reestructuración de espacios residenciales y comerciales.", 
      icono: "home",
      imagen: "/images/imagen14.jpeg",
      tiempo: "Variable (Sujeto al cronograma de obra y alcances del proyecto arquitectónico).",
      materiales: "Tablaroca RH (Resistente a Humedad), estructuras galvanizadas, recubrimientos finos y porcelanatos.",
      garantia: "1 año en vicios ocultos y mano de obra civil aplicable tras la entrega final.",
      detalles: "Desarrollamos proyectos llave en mano cubriendo demoliciones controladas, levantamiento de muros falsos, diseño de plafones, instalaciones eléctricas estéticas y acabados de pintura fina texturizada."
    }
  ];

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 bg-slate-50/50 min-h-screen">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#154A94] uppercase tracking-wide">
          Nuestros Servicios Profesionales
        </h2>
        <div className="w-24 h-1 bg-[#E05600] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {listaServicios.map((srv, idx) => (
          <div 
            key={idx} 
            onClick={() => setServicioSeleccionado(srv)}
            className="group bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row overflow-hidden border-l-4 border-l-[#154A94] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:border-l-[#E05600] cursor-pointer"
          >
            <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden shrink-0">
              <img 
                src={srv.imagen} 
                alt={srv.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
              <div className="absolute inset-0 bg-[#154A94]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-2xl text-[#154A94] bg-slate-100 p-3 rounded-xl transition-all duration-300 group-hover:bg-[#E05600]/10 group-hover:text-[#E05600] select-none">
                    {srv.icono}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#154A94] tracking-tight group-hover:text-[#E05600] transition-colors duration-300">
                    {srv.titulo}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#154A94] group-hover:text-[#E05600] transition-colors duration-300">
                <span>Saber más</span>
                <span className="material-icons text-sm select-none animate-pulse">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {servicioSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">

          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-scale-up">

            <div className="relative h-48 md:h-64 shrink-0">
              <img 
                src={servicioSeleccionado.imagen} 
                alt={servicioSeleccionado.titulo} 
                className="w-full h-full object-cover"/>
              <div className="absolute inset-0 from-slate-900/80 via-slate-900/40 to-transparent"></div>

              <button 
                onClick={() => setServicioSeleccionado(null)}
                className="absolute top-4 right-4 bg-black/40 text-white hover:bg-[#E05600] p-2 rounded-full transition-colors focus:outline-none flex items-center justify-center"
              >
                <span className="material-icons text-xl select-none">close</span>
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-white">
                <span className="material-icons text-2xl bg-[#E05600] p-2 rounded-xl select-none hidden sm:block">
                  {servicioSeleccionado.icono}
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide drop-shadow-md">
                  {servicioSeleccionado.titulo}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 overflow-y-auto text-sm text-slate-700">
              
              <div>
                <h4 className="text-xs font-bold text-[#154A94] uppercase tracking-wider mb-1">Descripción General</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{servicioSeleccionado.detalles}</p>
              </div>

              <hr className="border-slate-100" />

              <div className="grid sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                
                <div className="flex gap-2.5 items-start">
                  <span className="material-icons text-[#E05600] text-lg select-none mt-0.5">schedule</span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase mb-0.5">Tiempo Estimado:</p>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed">{servicioSeleccionado.tiempo}</p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="material-icons text-[#154A94] text-lg select-none mt-0.5">verified_user</span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase mb-0.5">Garantía del Servicio:</p>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed">{servicioSeleccionado.garantia}</p>
                  </div>
                </div>

              </div>

              <div>
                <h4 className="text-xs font-bold text-[#154A94] uppercase tracking-wider mb-1.5">Sistemas y Materiales Base:</h4>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-600 bg-blue-50/40 p-3 rounded-lg border border-blue-100/50">
                  <span className="material-icons text-[#154A94] text-base select-none mt-0.5">layers</span>
                  <p className="leading-relaxed">{servicioSeleccionado.materiales}</p>
                </div>
              </div>

            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end shrink-0">
              <a 
                href="https://wa.me/527444003040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-1.5 tracking-wide">
                <span className="material-icons text-base select-none">chat</span>
                COTIZAR POR WHATSAPP
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}