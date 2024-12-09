import React, { useState } from "react";
import "./Carta_Pensiones.css"; 

const Carta_Pensiones = ({ retribucion }) => {
  const [mostrarRequisitos, setMostrarRequisitos] = useState(false);

  const toggleRequisitos = () => {
    setMostrarRequisitos(!mostrarRequisitos);
  };

  return (
    <div className="card pensiones-card">
      <div className="card-body">
        <h5 className="card-title">{retribucion.nombre}</h5>
        <p className="card-text">{retribucion.descripcion}</p>
        {mostrarRequisitos && (
          <>
            <h6>Requisitos:</h6>
            <ul className="list-group list-group-flush">
              {retribucion.requisitos.map((requisito, index) => (
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

export default Carta_Pensiones;

