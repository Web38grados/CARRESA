import { useState } from 'react';

export default function ContactoView() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias ${nombre}! Mensaje recibido. Nos comunicaremos a ${correo} a la brevedad.`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

      <div>
        <h2 className="text-3xl font-black text-[#154A94] uppercase mb-4 tracking-wide">
          Ubicación y Atención Corporativa
        </h2>
        <p className="text-slate-600 text-sm mb-8 leading-relaxed max-w-xl">
          Comunícate directo con nosotros. Puedes agendar una visita técnica en sitio para cuantificar volumetrías o solicitar un presupuesto formal de materiales.
        </p>
        
        <div className="space-y-5 text-sm text-slate-700">
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
            <span className="material-icons text-[#154A94] text-xl mt-0.5 select-none">place</span>
            <div>
              <p className="font-bold text-slate-900 mb-0.5">Dirección:</p>
              <p className="text-slate-600 leading-relaxed">Vasco Nuñez de Balboa #513 Fracc. Hornos, Acapulco, Gro. C.P. 39355</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
            <span className="material-icons text-[#154A94] text-xl mt-0.5 select-none">phone</span>
            <div>
              <p className="font-bold text-slate-900 mb-0.5">Teléfono Fijo:</p>
              <a href="tel:7444857582" className="text-slate-600 hover:text-[#E05600] transition-colors font-semibold">
                744 485 7582
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
            <span className="material-icons text-[#154A94] text-xl mt-0.5 select-none">email</span>
            <div>
              <p className="font-bold text-slate-900 mb-0.5">Correo Electrónico:</p>
              <a href="mailto:carresaaca@gmail.com" className="text-slate-600 hover:text-[#E05600] transition-colors break-all font-semibold">
                carresaaca@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <span className="material-icons text-emerald-500 text-xl select-none">chat</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#154A94] uppercase tracking-wide">
                Canal de WhatsApp
              </h3>
              <p className="text-slate-500 text-xs">Conversación inmediata con nuestro equipo móvil.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/527444003040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-black text-center py-3.5 rounded-xl shadow-md hover:bg-emerald-600 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 tracking-wide text-sm"
          >
            <span className="material-icons text-xl select-none">send</span>
            ENVIAR WHATSAPP (7444003040)
          </a>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-100 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-icons text-[#154A94] text-2xl select-none">mail</span>
        </div>
        <h3 className="text-xl font-bold text-[#154A94] text-center mb-2 uppercase tracking-wide">
          Contacto por Correo Rápido
        </h3>
        <p className="text-slate-500 text-xs text-center mb-8 max-w-sm mx-auto leading-relaxed">
          Escríbenos directamente desde aquí para cotizaciones, dudas técnicas o presupuestos de material Fester.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 transition-colors group-focus-within:text-[#154A94]">
              Nombre Completo
            </label>
            <input 
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Ing. Carlos Mendoza"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all duration-300 outline-none focus:border-[#154A94] focus:bg-white focus:ring-2 focus:ring-[#154A94]/10"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 transition-colors group-focus-within:text-[#154A94]">
              Correo Electrónico
            </label>
            <input 
              type="email"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all duration-300 outline-none focus:border-[#154A94] focus:bg-white focus:ring-2 focus:ring-[#154A94]/10"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 transition-colors group-focus-within:text-[#154A94]">
              Mensaje o Detalles de la Obra
            </label>
            <textarea 
              rows={4}
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Indícanos los metros cuadrados, tipo de losa o el recubrimiento que necesitas cotizar..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all duration-300 outline-none focus:border-[#154A94] focus:bg-white focus:ring-2 focus:ring-[#154A94]/10 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#154A94] hover:bg-[#103E7A] text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm tracking-wide"
          >
            <span className="material-icons text-base select-none">alternate_email</span>
            ENVIAR MENSAJE AHORA
          </button>
        </form>
      </div>

    </div>
  );
}