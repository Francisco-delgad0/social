import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './componentes/Footer';
import AdultoMayor from './paginas/Adulto_mayor';
import Educacion from './paginas/Educacion';
import Navbar from './componentes/Navbar';
import Homepage from './paginas/Homepage'; 
import Empleo from './paginas/Empleo';
import Pensiones from './paginas/Pensiones';
import Login from './paginas/Login';
import Prueba from './paginas/Prueba';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para manejar la autenticación

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Rutas accesibles sin necesidad de iniciar sesión */}
          <Route path="/" element={<Homepage />} />
          <Route path="/adulto-mayor" element={<AdultoMayor />} />
          <Route path="/Educacion" element={<Educacion />} />
          <Route path="/Empleo" element={<Empleo />} />
          <Route path="/Pensiones" element={<Pensiones />} />
          <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Ruta protegida que requiere inicio de sesión */}
          <Route 
            path="/Prueba" 
            element={isAuthenticated ? <Prueba /> : <Navigate to="/Login" />} 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
