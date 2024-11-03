import React from 'react';
import { useTranslation } from 'react-i18next';
import Carta_Pensiones from '../componentes/Carta_Pensiones';
import '../App.css';


const Penciones = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('idioma', newLanguage)
};
    const retribuciones = [
        {
          id: 1,
          nombre: t('pension1.name'),
          descripcion: t('pension1.description'),
          requisitos: [
            t('pension1.requisito1'),
            t('pension1.requisito2'),
            t('pension1.requisito3'),
            t('pension1.requisito4'),
            t('pension1.requisito5')
          ]
        },
        {
            id: 2,
            nombre: t('pension2.name'),
            descripcion: t('pension2.description'),
            requisitos: [
              t('pension2.requisito1'),
              t('pension2.requisito2'),
              t('pension2.requisito3'),
              t('pension2.requisito4'),
              t('pension2.requisito5'),
              t('pension2.requisito6'),
              t('pension2.requisito7')
            ]
          },
        {
            id: 3,
            nombre: t('pension3.name'),
            descripcion: t('pension3.description'),
            requisitos: [
              t('pension3.requisito1'),
              t('pension3.requisito2'),
              t('pension3.requisito3'),
              t('pension3.requisito4'),
              t('pension3.requisito5'),
              t('pension3.requisito6'),
              t('pension3.requisito7'),
              t('pension3.requisito8')
            ]
          },
        {
            id: 4,
            nombre: t('pension4.name'),
            descripcion: t('pension4.description'),
            requisitos: [
              t('pension4.requisito1'),
              t('pension4.requisito2'),
              t('pension4.requisito3'),
              t('pension4.requisito4'),
              t('pension4.requisito5'),
              t('pension4.requisito6'),
              t('pension4.requisito7'),
              t('pension4.requisito8'),
              t('pension4.requisito9')
            ]
          },
        {
            id: 5,
            nombre: t('pension5.name'),
            descripcion: t('pension5.description'),
            requisitos: [
              t('pension5.requisito1'),
              t('pension5.requisito2'),
              t('pension5.requisito3'),
              t('pension5.requisito4'),
              t('pension5.requisito5'),
              t('pension5.requisito6'),
              t('pension5.requisito7'),
              t('pension5.requisito8'),
              t('pension5.requisito9')
            ]
          },
        {
            id: 6,
            nombre: t('pension6.name'),
            descripcion: t('pension6.description'),
            requisitos: [
              t('pension6.requisito1'),
              t('pension6.requisito2'),
              t('pension6.requisito3'),
              t('pension6.requisito4'),
              t('pension6.requisito5'),
              t('pension6.requisito6'),
              t('pension6.requisito7'),
              t('pension6.requisito8'),
              t('pension6.requisito9'),
              t('pension6.requisito10')
            ]
          },


      ];
    
      return (
        <div className="container benficios-bg mt-5"> 
            <h1 className="text-center">{t('pensiones')}</h1>
            <button onClick={toggleLanguage} className="btn btn-secondary mb-3">
            {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}</button>
            <div className="row d-flex flex-wrap justify-content-center"> 
                {retribuciones.map((retribucion) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={retribucion.id}>
                        <Carta_Pensiones retribucion={retribucion}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Penciones;