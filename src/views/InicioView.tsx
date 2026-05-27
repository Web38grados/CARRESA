import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InicioView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = ['/images/imagen16.jpeg', '/images/imagen6.jpeg', '/images/imagen7.jpeg', '/images/imagen14.jpeg'];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 2000); 

    return () => clearInterval(interval); 
  }, [heroImages.length]);

  const faqs = [
    {
      pregunta: "¿Cuál es el impermeabilizante más recomendado para techos en temporada de calor?",
      respuesta: "Para techos expuestos a altas temperaturas, lo ideal es un sistema acrílico reflectivo de alta densidad. El sistema PROTEXA ALUMACRIL o sus soluciones con alta reflectividad solar actúan como barrera térmica, disminuyendo drásticamente la absorción de calor, reduciendo la temperatura al interior del inmueble y resistiendo la degradación por rayos UV en zonas costeras."
    },
    {
      pregunta: "¿Puedo aplicar productos Protexa en superficies húmedas o con salitre?",
      respuesta: "Sí, contamos con sistemas específicos para controlar la humedad y el salitre. Es indispensable realizar un saneamiento profundo de la superficie, eliminando los desprendimientos contaminados, para luego aplicar un primario hidrofugante cementoso o barreras asfálticas base agua de la línea PROTEXA que sellan la porosidad y detienen la humedad ascendente."
    },
    {
      pregunta: "¿Cómo elijo entre mortero autonivelante o de fraguado rápido?",
      respuesta: "La elección se basa en el programa de obra y la nivelación requerida. Los morteros de fraguado rápido Protexa están diseñados para reparaciones estructurales urgentes que requieren tráfico en pocas horas, mientras que nuestros aditivos y cementos técnicos autonivelantes se usan para lograr superficies perfectamente planas y uniformes antes de colocar acabados finales."
    },
    {
      pregunta: "¿Protexa ofrece garantía en sus impermeabilizantes?",
      respuesta: "Sí, Protexa respalda oficialmente sus materiales. Dependiendo de la tecnología del sistema seleccionado (como los mantos prefabricados PLASTIMAX, soluciones asfálticas o elastoméricas acrílicas), las garantías por escrito van desde los 3, 5, 6, 8 hasta los 10 años, sujetas al cumplimiento de las fichas técnicas de aplicación."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50">

      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages[currentSlide]} 
            alt="CARRESA de México" 
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-44 pb-36 md:py-40 flex flex-col justify-center z-10">
          <span className="bg-[#E05600] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full w-max mb-6 tracking-widest shadow-md">
            Infraestructura Técnica Profesional
          </span>
          <h1 className="text-4xl md:text-6xl font-black max-w-3xl leading-tight drop-shadow-sm">
            Especialistas en <span className="text-[#E05600]">Impermeabilizar, Pintar</span> y Remodelar.
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mt-4 font-normal drop-shadow-sm leading-relaxed">
            Soluciones integrales para todo tipo de inmuebles comerciales, corporativos y residenciales utilizando materiales de alta gama.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contacto" className="bg-[#E05600] hover:bg-opacity-90 text-white font-bold px-8 py-3.5 rounded shadow-lg transition-all transform hover:scale-[1.01]">
              Cotizar Mi Proyecto
            </Link>
            <Link to="/servicios" className="border-2 border-white bg-white/5 hover:bg-white hover:text-[#154A94] text-white font-bold px-8 py-3.5 rounded transition-all transform hover:scale-[1.01]">
              Conocer Servicios
            </Link>
          </div>
        </div>

        <button 
          onClick={() => setCurrentSlide(prev => prev === 0 ? heroImages.length - 1 : prev - 1)} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-[#E05600] transition-colors z-20"
        >
          ❮
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => prev === heroImages.length - 1 ? 0 : prev + 1)} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-[#E05600] transition-colors z-20"
        >
          ❯
        </button>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 bg-transparent">
        <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-[#154A94] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#154A94] hover:shadow-lg group">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#154A94] transition-colors duration-300 group-hover:text-white">
              <span className="material-icons text-2xl">track_changes</span> 
              <h3 className="text-xl font-bold uppercase tracking-wide">Nuestra Misión</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-slate-100">
              Abrir mercados comercializando los productos relacionados con la impermeabilización, construcción y remodelación, así como la realización de los trabajos con nuestros materiales.
            </p>
          </div>
        </div>
        
        <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-[#E05600] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#E05600] hover:shadow-lg group">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#E05600] transition-colors duration-300 group-hover:text-white">
              <span className="material-icons text-2xl">visibility</span> 
              <h3 className="text-xl font-bold uppercase tracking-wide">Nuestra Visión</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-slate-100">
              Llegar a más clientes y tener más ventas a nivel regional consolidando la confianza técnica en cada proyecto constructivo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-black text-[#154A94] uppercase tracking-wide mb-2 text-center md:text-left">
          Preguntas Frecuentes sobre Productos Protexa
        </h2>
        <div className="w-20 h-1 bg-[#E05600] mb-8 mx-auto md:mx-0"></div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-4 font-bold text-sm text-slate-800 hover:text-[#154A94] flex justify-between items-center transition-colors focus:outline-none"
              >
                <span className={openFaq === index ? "text-[#E05600]" : ""}>{faq.pregunta}</span>
                <span className={`material-icons transition-transform duration-300 text-slate-400 ${openFaq === index ? 'rotate-180 text-[#E05600]' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === index ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                }`}
              >
                <p className="px-6 py-4 text-xs text-slate-600 leading-relaxed bg-slate-50">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

        <section className="py-12 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center gap-6 border-l-8 border-y border-r border-slate-100 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl">
            
            <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-black text-[#154A94] uppercase tracking-wide">
                ¿Listo para iniciar tu obra o cotización?
            </h3>
            <p className="text-xs text-slate-600 max-w-xl leading-relaxed font-medium">
                Recibe asesoría personalizada en minutos. Evaluamos tus metros cuadrados en Acapulco para entregarte el presupuesto exacto sin costos ocultos.
            </p>
            </div>
            
            <Link 
            to="/contacto"
            className="w-full md:w-auto bg-[#E05600] text-white text-center font-bold text-xs uppercase px-6 py-4 rounded-xl shadow-md hover:bg-[#154A94] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 tracking-wider shrink-0">
            <span className="material-icons text-sm">assignment</span>
            Solicitar Presupuesto Gratis
            </Link>
        </div>
        </section>

    </div>
  );
}