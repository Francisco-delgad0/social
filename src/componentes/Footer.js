import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"


const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light py-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mt-3">
            <p>@ 2024 Protección Social. Todos los derechos reservados.</p>
            <p>
              Sobre nosotros: Este sitio es operado por un equipo comprometido con el bienestar social. Nuestro objetivo es proporcionar información accesible y recursos sobre iniciativas estatales de protección social, ayudando a la comunidad a acceder a subsidios y beneficios disponibles.
            </p>
          </div>      
        </div>
      </div>
    </footer>
  );
};

export default Footer;