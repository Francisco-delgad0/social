import React from 'react';

const Carta_Empleo = ({ trabajo }) => {
    return (
        <div className="card shadow-sm" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title">{trabajo.nombre}</h5>
                <p className="card-text">{trabajo.descripcion}</p>
                <h6>Requisitos:</h6>
                <ul className="list-group list-group-flush">
                    {trabajo.requisitos.map((requisito, index) => (
                        <li className="list-group-item" key={index}>{requisito}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Carta_Empleo;
