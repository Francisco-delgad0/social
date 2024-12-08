import React, { useState } from 'react';
import './Carta_Adulto_Mayor.css';

const Carta_Adulto_Mayor = ({ subsidio }) => {
  const [mostrarRequisitos, setMostrarRequisitos] = useState(false);

  const toggleRequisitos = () => {
    setMostrarRequisitos(!mostrarRequisitos);
  };

  return (
    <div className="card mb-4 flex-fill" style={{ position: 'relative', height: '100%' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
          <span role="img" aria-label="subsidio">💡</span> {subsidio.nombre}
        </h5>
        <p className="card-text" style={{ fontSize: '1.2rem' }}>{subsidio.descripcion}</p>
        
   
        {mostrarRequisitos && (
          <div className="mt-3">
            <h6 style={{ fontSize: '1.2rem' }}>Requisitos:</h6>
            <ul className="list-group list-group-flush">
              {subsidio.requisitos.map((req, index) => (
                <li key={index} className="list-group-item" style={{ fontSize: '1.1rem' }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <button
        className="btn btn-primary toggle-button"
        onClick={toggleRequisitos}
      >
        {mostrarRequisitos ? 'Ocultar requisitos' : 'Requisitos'}
      </button>
    </div>
  );
};

export default Carta_Adulto_Mayor;
