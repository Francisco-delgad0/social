import React from 'react';

const Carta_Educacion = ({ curso }) => {
    return (
        <div className="card mb-4 flex-fill" style={{ height: '100%', backgroundColor: '#f9f9f9', border: '2px solid #007BFF' }}> 
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#007BFF' }}>{curso.nombre}</h5>
                <p className="card-text" style={{ fontSize: '1.2rem' }}>{curso.descripcion}</p>
                <h6 className="mt-3" style={{ fontSize: '1.2rem' }}>Requisitos:</h6>
                <ul className="list-group list-group-flush">
                    {curso.requisitos.map((req, index) => (
                        <li key={index} className="list-group-item" style={{ fontSize: '1.1rem' }}>{req}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Carta_Educacion;