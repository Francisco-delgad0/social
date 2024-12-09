import React, { useState } from 'react';
import './Carta_Educacion.css';

const Carta_Educacion = ({ curso }) => {
  const [showRequisitos, setShowRequisitos] = useState(false);

  const toggleRequisitos = () => {
    setShowRequisitos(!showRequisitos);
  };

  return (
    <div className="card mb-4 flex-fill" style={{ height: '100%', backgroundColor: '#f9f9f9', border: '2px solid #007BFF' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#007BFF' }}>{curso.nombre}</h5>
        <p className="card-text" style={{ fontSize: '1.2rem' }}>{curso.descripcion}</p>

        {showRequisitos && (
          <>
            <h6 className="mt-3" style={{ fontSize: '1.2rem' }}>Requisitos:</h6>
            <ul className="list-group list-group-flush">
              {curso.requisitos.map((req, index) => (
                <li key={index} className="list-group-item" style={{ fontSize: '1.1rem' }}>{req}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="position-absolute bottom-0 start-0 mb-3 ms-3">
        <button 
          className="btn btn-primary" 
          onClick={toggleRequisitos} 
          style={{ fontSize: '1rem' }}
        >
          {showRequisitos ? 'Ocultar Requisitos' : 'Requisitos'}
        </button>
      </div>
    </div>
  );
};

export default Carta_Educacion;