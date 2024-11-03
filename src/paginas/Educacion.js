import React from 'react';
import { useTranslation } from 'react-i18next';
import Carta_Educacion from '../componentes/Carta_Educacion';
import '../App.css';


const Educacion = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('idioma', newLanguage)
};
    const cursos = [
        {
          id: 1,
          nombre: t('curso1.name'),
          descripcion: t('curso1.description'),
          requisitos: [
            t('curso1.requisito1'),
            t('curso1.requisito2'),
            t('curso1.requisito3'),
            t('curso1.requisito4'),
            t('curso1.requisito5')
          ]
        },
        {
            id: 2,
            nombre: t('curso2.name'),
            descripcion: t('curso2.description'),
            requisitos: [
              t('curso2.requisito1'),
              t('curso2.requisito2'),
              t('curso2.requisito3'),
              t('curso2.requisito4'),
              t('curso2.requisito5')
            ]
          },
        {
            id: 3,
            nombre: t('curso3.name'),
            descripcion: t('curso3.description'),
            requisitos: [
              t('curso3.requisito1'),
              t('curso3.requisito2'),
              t('curso3.requisito3'),
              t('curso3.requisito4'),
              t('curso3.requisito5'),
              t('curso3.requisito6')
            ]
          },
        {
            id: 4,
            nombre: t('curso4.name'),
            descripcion: t('curso4.description'),
            requisitos: [
              t('curso4.requisito1'),
              t('curso4.requisito2'),
              t('curso4.requisito3'),
              t('curso4.requisito4'),
              t('curso4.requisito5'),
            ]
          },
        {
            id: 5,
            nombre: t('curso5.name'),
            descripcion: t('curso5.description'),
            requisitos: [
              t('curso5.requisito1'),
              t('curso5.requisito2'),
              t('curso5.requisito3'),
            ]
          },
        {
            id: 6,
            nombre: t('curso6.name'),
            descripcion: t('curso6.description'),
            requisitos: [
              t('curso6.requisito1'),
              t('curso6.requisito2'),
              t('curso6.requisito3'),
            ]
          },
          {
            id: 7,
            nombre: t('curso7.name'),
            descripcion: t('curso7.description'),
            requisitos: [
              t('curso7.requisito1'),
              t('curso7.requisito2'),
              t('curso7.requisito3'),
            ]
          }


      ];
    
      return (
        <div className="container educacion-bg mt-5"> 
            <h1 className="text-center">{t('cursos')}</h1>
            <button onClick={toggleLanguage} className="btn btn-secondary mb-3">
            {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
            <div className="row d-flex flex-wrap justify-content-center"> 
                {cursos.map((curso) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={curso.id}>
                        <Carta_Educacion curso={curso} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educacion;