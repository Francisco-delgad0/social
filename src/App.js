import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import AdultoMayor from './paginas/Adulto_mayor';
import Educacion from './paginas/Educacion';
import Navbar from './componentes/Navbar';
import Homepage from './paginas/Homepage'; // Ajusta la ruta si es necesario

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
        <Route path="/" element={<Homepage />} /> {/* Ruta principal */}
        <Route path="/adulto-mayor" element={<AdultoMayor />} />
        <Route path="/Educacion" element={<Educacion />} />
        </Routes>

      </div>
      <Footer/>
    </Router>

  );
}

export default App;