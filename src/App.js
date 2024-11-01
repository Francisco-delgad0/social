import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import AdultoMayor from './paginas/Adulto_mayor';
import Navbar
 from './componentes/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
        <Route path="/adulto-mayor" element={<AdultoMayor />} />

        </Routes>

      </div>
      <Footer/>
    </Router>

  );
}

export default App;