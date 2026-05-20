import { Link } from 'react-router-dom';

export default function ProductsView() {
  const listaProductos = [
    { nombre: "Impermeabilizantes Profesionales", cat: "Impermeabilizantes", img: "/images/imagen4.jpeg", desc: "Sistemas acrílicos y mantos asfálticos de alta resistencia listos para contrarrestar el intemperismo severo." },
    { nombre: "Pinturas de Alta Durabilidad", cat: "Pinturas", img: "/images/imagen8.jpeg", desc: "Recubrimientos arquitectónicos premium con máxima protección UV, ideales para interiores y fachadas." },
    { nombre: "Panel Covintec", cat: "Estructural", img: "/images/imagen1.jpeg", desc: "Paneles termoacústicos estructurales de última generación para construcciones y ampliaciones rápidas." }
  ];

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 bg-slate-50/50">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#154A94] uppercase tracking-wide">
          Línea de Suministros Oficiales
        </h2>
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

            <div className="p-6 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-lg font-extrabold text-[#154A94] mt-1 mb-2 tracking-tight group-hover:text-[#E05600] transition-colors duration-300">
                  {prod.nombre}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {prod.desc}
                </p>
              </div>

              <Link 
                to="/contacto" 
                className="block text-center bg-[#154A94] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all duration-300 transform hover:bg-[#E05600] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
                Cotizar Material
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}