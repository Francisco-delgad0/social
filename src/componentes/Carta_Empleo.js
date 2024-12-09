import React, { useState } from "react";
import "./Carta_Empleo.css"; // Archivo CSS exclusivo para las cartas de empleo

const Carta_Empleo = ({ trabajo }) => {
  const [mostrarRequisitos, setMostrarRequisitos] = useState(false);

  const toggleRequisitos = () => {
    setMostrarRequisitos(!mostrarRequisitos);
  };

  return (
    <div className="card empleo-card">
      <div className="card-body">
        <h5 className="card-title">{trabajo.nombre}</h5>
        <p className="card-text">{trabajo.descripcion}</p>
        {mostrarRequisitos && (
          <>
            <h6>Requisitos:</h6>
            <ul className="list-group list-group-flush">
              {trabajo.requisitos.map((requisito, index) => (
                <li className="list-group-item" key={index}>
                  {requisito}
                </li>
              ))}
            </ul>
          </>
        )}
        <button
          className="btn btn-primary position-absolute"
          onClick={toggleRequisitos}
        >
          {mostrarRequisitos ? "Ocultar requisitos" : "Más información"}
        </button>
      </div>
    </div>
  );
};

export default Carta_Empleo;
