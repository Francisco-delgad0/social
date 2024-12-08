import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';

const Homepage = lazy(() => import('./paginas/Homepage'));
const AdultoMayor = lazy(() => import('./paginas/Adulto_mayor'));
const Educacion = lazy(() => import('./paginas/Educacion'));
const Empleo = lazy(() => import('./paginas/Empleo'));
const Pensiones = lazy(() => import('./paginas/Pensiones'));
const Login = lazy(() => import('./paginas/Login'));
const Prueba = lazy(() => import('./paginas/Prueba'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/adulto-mayor" element={<AdultoMayor />} />
            <Route path="/Educacion" element={<Educacion />} />
            <Route path="/Empleo" element={<Empleo />} />
            <Route path="/Pensiones" element={<Pensiones />} />
            <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/Prueba" element={isAuthenticated ? <Prueba /> : <Navigate to="/Login" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;