import React from 'react';
import './homepage.css'; // Asegúrate de importar los estilos correctos

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header-content">
        <h1>Bienvenidos a SocialApp</h1>
        <p>Conéctate fácilmente con los programas de protección social que te ayudarán a mejorar tu calidad de vida y la de tu comunidad.</p>
        <button className="cta-button">Explorar Programas</button>
      </header>
    </div>
  );
};

export default Homepage;