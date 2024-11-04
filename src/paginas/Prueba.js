import React from 'react';
import './homepage.css';

const Prueba = () => {
  return (
    <div className="homepage-container">
      <header className="header-content">
        <h1>¿Listo para postular?</h1>
        <p>Sigue estos pasos para postularte a nuestros programas de protección social:</p>
        
        <ol className="steps-list">
          <li>Visita nuestra página web y selecciona el programa que más te interese.</li>
          <li>Completa el formulario de postulación en línea.</li>
          <li>Adjunta los documentos requeridos (identificación, comprobante de residencia, etc.).</li>
          <li>Envía tu solicitud y espera la confirmación de tu postulación.</li>
        </ol>

        <button className="cta-button" onClick={() => alert("Funcionalidad aún no implementada")}>
          Postular
        </button>

        <p className="reminder-message">Recuerda tener tu carnet a mano para completar tu postulación.</p>
      </header>
    </div>
  );
};

export default Prueba;
