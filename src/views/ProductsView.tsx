export default function ProductsView() {
  const listaProductos = [
    { 
      nombre: "Impermeabilizantes Protexa", 
      cat: "Impermeabilizantes", 
      img: "/images/imagen4.jpeg", 
      desc: "Sistemas acrílicos y mantos prefabricados asfálticos Protexa de alta resistencia para contrarrestar el intemperismo severo en losas, techos y azoteas.",
      pdf: "/fichas/ficha-protexa-impermeabilizantes.pdf"
    },
    { 
      nombre: "Pinturas Contimex", 
      cat: "Pinturas", 
      img: "/images/imagen8.jpeg", 
      desc: "Línea de pinturas vinílicas y esmaltes Contimex con máxima protección UV, ideales para fachadas e interiores de alta durabilidad.",
      pdf: "/fichas/ficha-contimex-pinturas.pdf"
    },
    { 
      nombre: "Panel Covintech", 
      cat: "Estructural", 
      img: "/images/imagen1.jpeg", 
      desc: "Paneles Covintech para losa y muro: solución termoacústica estructural para construcciones y ampliaciones rápidas en proyectos residenciales y comerciales.",
      pdf: "/fichas/ficha-covintech-panel.pdf"
    }
  ];

  const whatsappNumber = "527444003040";

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 bg-slate-50/50">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#154A94] uppercase tracking-wide">
          Línea de Suministros Oficiales
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium max-w-xl mx-auto leading-relaxed">
          Descarga la ficha técnica de cada producto o contáctanos para cotización directa.
        </p>
        <div className="w-24 h-1 bg-[#E05600] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {listaProductos.map((prod, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-b-4 hover:border-b-[#E05600]">
            <div className="h-56 bg-slate-100 relative overflow-hidden">
              <img 
                src={prod.img} 
                alt={prod.nombre} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#E05600] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {prod.cat}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="mb-6">
                <h3 className="text-lg font-extrabold text-[#154A94] mt-1 mb-2 tracking-tight group-hover:text-[#E05600] transition-colors duration-300">
                  {prod.nombre}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {prod.desc}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={prod.pdf}
                  download
                  className="flex items-center justify-center gap-1.5 border border-[#154A94] text-[#154A94] font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#154A94] hover:text-white hover:shadow-sm"
                >
                  <span className="material-icons text-sm select-none">download</span>
                  Ficha Técnica PDF
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20cotizar:%20${encodeURIComponent(prod.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all duration-300 hover:bg-emerald-600 hover:shadow-md"
                >
                  <span className="material-icons text-sm select-none">chat</span>
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
