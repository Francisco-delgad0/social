import React from 'react';
import { useTranslation } from 'react-i18next';
import Carta_Adulto_Mayor from '../componentes/Carta_Adulto_Mayor';
import '../App.css'

const AdultoMayor = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
      const newLanguage = i18n.language === 'es' ? 'en' : 'es';
      i18n.changeLanguage(newLanguage);
      localStorage.setItem('idioma', newLanguage)
  };
    const menuItems = [
        {
          id: 1,
          nombre: t('subsidio1.name'),
          descripcion: t('subsidio1.description'),
          requisitos: [
            t("subsidio1.requisito1"),
            t("subsidio1.requisito2"),
            t("subsidio1.requisito3"),
            t("subsidio1.requisito4")
          ]
        },
        {
            id: 2,
            nombre: t('subsidio2.name'),
            descripcion: t('subsidio2.description'),
            requisitos: [
              t("subsidio2.requisito1"),
              t("subsidio2.requisito2"),
              t("subsidio2.requisito3"),
              t("subsidio2.requisito4"),
              t("subsidio2.requisito5")
            ]
          },
        {
            id: 3,
            nombre: t('subsidio3.name'),
            descripcion: t('subsidio3.description'),
            requisitos: [
              t("subsidio3.requisito1"),
              t("subsidio3.requisito2"),
              t("subsidio3.requisito3")
            ]
          },
        {
            id: 4,
            nombre: t("subsidio4.name"),
            descripcion: t("subsidio4.description"),
            requisitos: [
              t("subsidio4.requisito1"),
              t("subsidio4.requisito2"),
              t("subsidio4.requisito3"),
              t("subsidio4.requisito4"),
              t("subsidio4.requisito5"),
              t("subsidio4.requisito6")
            ]
          },
        {
            id: 5,
            nombre: t("subsidio5.name"),
            descripcion: t("subsidio5.description"),
            requisitos: [
              t("subsidio5.requisito1"),
              t("subsidio5.requisito2"),
              t("subsidio5.requisito3"),
              t("subsidio5.requisito4"),
              t("subsidio5.requisito5"),
              t("subsidio5.requisito6")
            ]
          },
        {
            id: 6,
            nombre: t("subsidio6.name"),
            descripcion: t("subsidio6.description"),
            requisitos: [
              t("subsidio6.requisito1"),
              t("subsidio6.requisito2"),
              t("subsidio6.requisito3")
            ]
          }

      ];
    
      return (
        <div className="container adulto-mayor-bg mt-5">
          <h1 className="text-center">{t('beneficios')}</h1>
          <button onClick={toggleLanguage} className="btn btn-secondary mb-3">
            {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
          <div className="row d-flex flex-wrap justify-content-center"> 
            {menuItems.map((item) => (
              <div className="col-12 col-sm-6 col-md-6 mb-4 d-flex" key={item.id}> 
                <Carta_Adulto_Mayor subsidio={item} />
              </div>
            ))}
          </div>
        </div>
      );
    };

export default AdultoMayor;