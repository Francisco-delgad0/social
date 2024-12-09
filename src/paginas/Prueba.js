import React, { useState } from 'react';
import './homepage.css';
import { useTranslation } from 'react-i18next';  // Asegúrate de importar correctamente

const Prueba = () => {
  const { t } = useTranslation();  // Llamada a useTranslation para obtener la función t

  // Estado para manejar las postulaciones
  const [postulaciones, setPostulaciones] = useState([]);  // Definición correcta de estado
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    genero: "",
    region: "",
    comuna: "",
    coberturaMedica: "",
    numeroContacto: "",
  });

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejo del envío del formulario
  const handlePostular = async (e) => {
    e.preventDefault();

    // Validar los datos antes de enviarlos
    if (!formData.nombre || !formData.fechaNacimiento || !formData.numeroContacto) {
      alert(t("formulario.error"));
      return;
    }

    // Enviar los datos al servidor como JSON
    try {
      const response = await fetch('http://localhost:3002/add-to-sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Enviar los datos como JSON
      });

      if (response.ok) {
        setPostulaciones((prevPostulaciones) => [...prevPostulaciones, formData]);  // Actualización correcta del estado
        setFormData({
          nombre: "",
          fechaNacimiento: "",
          genero: "",
          region: "",
          comuna: "",
          coberturaMedica: "",
          numeroContacto: "",
        });  // Limpiar el formulario
        alert(t("Enviado correctamente"));
      } else {
        alert(t("Error al enviar"));
      }
    } catch (error) {
      console.error(error);
      alert(t("Error al enviar"));
    }
  };

  return (
    <div className="homepage-container prueba">
      <header className="header-content">
        <h1>{t("postular")}</h1>
        <p>{t("inst")}</p>

        <ol className="steps-list">
          <li>{t("pasospostulacion.text1")}</li>
          <li>{t("pasospostulacion.text2")}</li>
          <li>{t("pasospostulacion.text3")}</li>
          <li>{t("pasospostulacion.text4")}</li>
        </ol>

        <p className="reminder-message">{t("idreminder")}</p>
      </header>

      <section className="form-section">
        <h2>{t("Datos")}</h2>
        <form onSubmit={handlePostular}>
          <label>
            {t("Nombre")}:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("Fecha de Nacimiento")}:
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("Genero")}:
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="">{t("Selecciona")}</option>
              <option value="Masculino">{t("Masculino")}</option>
              <option value="Femenino">{t("Femenino")}</option>
              <option value="Otro">{t("Otro")}</option>
            </select>
          </label>
          <label>
            {t("Region")}:
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("Comuna")}:
            <input
              type="text"
              name="comuna"
              value={formData.comuna}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("Cobertura Medica")}:
            <input
              type="text"
              name="coberturaMedica"
              value={formData.coberturaMedica}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("Numero Contacto")}:
            <input
              type="tel"
              name="numeroContacto"
              value={formData.numeroContacto}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="cta-button">{t("Enviar")}</button>
        </form>
      </section>

      
    </div>
  );
};

export default Prueba;
