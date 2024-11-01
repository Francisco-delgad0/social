import React from 'react';

const Carta_Adulto_Mayor= ({ subsidio }) => {
    return (
        <div className="card mb-4 flex-fill" style={{ height: '100%' }}> 
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.5rem' }}>{subsidio.nombre}</h5>
            <p className="card-text" style={{ fontSize: '1.2rem' }}>{subsidio.descripcion}</p>
            <h6 className="mt-3" style={{ fontSize: '1.2rem' }}>Requisitos:</h6>
            <ul className="list-group list-group-flush">
              {subsidio.requisitos.map((req, index) => (
                <li key={index} className="list-group-item" style={{ fontSize: '1.1rem' }}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    

export default Carta_Adulto_Mayor;