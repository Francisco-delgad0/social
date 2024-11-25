import React from 'react';
import './homepage.css';
import { useTranslation } from 'react-i18next';

const Prueba = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="homepage-container">
      <header className="header-content">
        <h1>{t("postular")}</h1>
        <p>{t("inst")}</p>
        
        <ol className="steps-list">
          <li>{t("pasospostulacion.text1")}</li>
          <li>{t("pasospostulacion.text2")}</li>
          <li>{t("pasospostulacion.text3")}</li>
          <li>{t("pasospostulacion.text4")}</li>
        </ol>

        <button className="cta-button" onClick={() => alert("Funcionalidad aún no implementada")}>
          {t("botonpostular")}
        </button>

        <p className="reminder-message">{t("idreminder")}</p>
      </header>
    </div>
  );
};

export default Prueba;
