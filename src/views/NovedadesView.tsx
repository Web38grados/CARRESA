export default function NovedadesView() {
  const articulos = [
    {
      categoria: "Tip de Aplicación",
      titulo: "¿Cómo saber si tu techo está listo para impermeabilizar?",
      desc: "Un error común es aplicar el producto sobre polvo o humedad atrapada. El tip de oro es realizar la 'prueba de la cinta': pega un pedazo de cinta transparente en el concreto; si al retirarla sale con polvo o restos blancos, la superficie requiere un lavado a presión con hidrolavadora y un sellador acrílico previo para evitar que el impermeabilizante se amolle o se desprenda.",
      icono: "lightbulb",
      fecha: "Tip Práctico",
      colorBorde: "border-l-[#E05600]",
      colorTexto: "text-[#E05600]",
      bgIcono: "bg-[#E05600]/10"
    },
    {
      categoria: "Tendencia & Producto",
      titulo: "Novedad: Pinturas e Impermeabilizantes Térmicos (Cool Roofs)",
      desc: "La última innovación en recubrimientos para zonas cálidas como Acapulco son los productos con microesferas expandidas. Estas resinas no solo protegen contra el agua, sino que reflejan hasta el 80% de los rayos solares. Aplicar estas imper-pinturas blancas en tus fachadas y techos puede reducir la temperatura al interior de las habitaciones entre 3°C y 5°C, disminuyendo el gasto en aire acondicionado.",
      icono: "wb_sunny",
      fecha: "Tendencia 2026",
      colorBorde: "border-l-[#154A94]",
      colorTexto: "text-[#154A94]",
      bgIcono: "bg-[#154A94]/10"
    },
    {
      categoria: "Dato Curioso",
      titulo: "El enemigo oculto del concreto: La Fatiga por Dilatación",
      desc: "¿Sabías que tu casa se estira y se encoge todos los días? Debido al calor del mediodía y el fresco de la noche, las losas de concreto sufren movimientos milimétricos constantes. Por esta razón, usar soluciones rígidas o cementos fijos en grietas no funciona a largo plazo; se necesitan selladores de poliuretano elásticos y mantos asfálticos que acompañen de forma flexible el movimiento estructural sin romperse.",
      icono: "psychology",
      fecha: "Dato Técnico",
      colorBorde: "border-l-purple-500",
      colorTexto: "text-purple-600",
      bgIcono: "bg-purple-50"
    },
    {
      categoria: "Tip",
      titulo: "Evaluaciones Técnicas y Presupuestos sin Costo a pie de obra",
      desc: "Si notas manchas de humedad, desprendimiento de pintura o salitre en tus muros, nuestro equipo técnico especializado está disponible para realizar visitas de diagnóstico directamente en tu inmueble dentro de la región. Evaluamos las condiciones de la superficie para entregarte una propuesta exacta sin compromisos.",
      icono: "assignment_turned_in",
      fecha: "Servicio Activo",
      colorBorde: "border-l-emerald-500",
      colorTexto: "text-emerald-600",
      bgIcono: "bg-emerald-50"
    }
  ];

  return (
    <div className="pt-20 pb-24 max-w-7xl mx-auto px-4 bg-slate-50/50 min-h-screen">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#154A94] uppercase tracking-wide">
          Novedades, Tips y Consejos Útiles
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium max-w-xl mx-auto leading-relaxed">
          Descubre soluciones prácticas para proteger tu patrimonio, datos curiosos sobre materiales y avisos importantes de nuestro equipo técnico.
        </p>
        <div className="w-24 h-1 bg-[#E05600] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {articulos.map((art, idx) => (
          <div 
            key={idx} 
            className={`group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm border-l-4 ${art.colorBorde} flex flex-col md:flex-row gap-6 items-start transition-all duration-300 transform hover:translate-x-2 hover:shadow-md hover:border-l-8`}
          >
            <div className={`p-4 rounded-xl ${art.bgIcono} ${art.colorTexto} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
              <span className="material-icons text-3xl select-none">{art.icono}</span>
            </div>

            <div className="space-y-2">
              
              <div className="flex items-center gap-x-4 text-[11px] font-bold uppercase tracking-wider">
                <span className={art.colorTexto}>{art.categoria}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400 font-medium normal-case flex items-center gap-1">
                  <span className="material-icons text-xs select-none">bookmark</span>
                  {art.fecha}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-extrabold text-[#154A94] group-hover:text-[#E05600] transition-colors duration-300 tracking-tight leading-snug">
                {art.titulo}
              </h3>

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                {art.desc}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}