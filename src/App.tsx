import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import InicioView from './views/InicioView';
import ServicesView from './views/ServicesView';
import ProductsView from './views/ProductsView';
import GaleriaView from './views/GaleriaView';
import NovedadesView from './views/NovedadesView';
import ContactoView from './views/ContactoView';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-carresaGray min-h-screen flex flex-col justify-between">
        <Header />

        <main className="pt-30">
          <Routes>
            <Route path="/" element={<InicioView />} />
            <Route path="/servicios" element={<ServicesView />} />
            <Route path="/productos" element={<ProductsView />} />
            <Route path="/galeria" element={<GaleriaView />} />
            <Route path="/novedades" element={<NovedadesView />} />
            <Route path="/contacto" element={<ContactoView />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}