import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container text-center text-md-start">
        <div class="row text center text-md-start">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <p>@ 2024 Parias. Todos los derechos reservados.</p>
          </div>      
         <p>Sobre nosotros: Operado por un equipo de tres cinéfilos dedicados, nuestro objetivo es ofrecer una selección diversa de películas, desde grandes éxitos de taquilla hasta gemas independientes y producciones locales, en un ambiente acogedor y accesible.</p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;