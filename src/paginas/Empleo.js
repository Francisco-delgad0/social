import React from 'react';
import { useTranslation } from 'react-i18next';
import Carta_Empleo from '../componentes/Carta_Empleo';
import '../App.css';


const Empleo = () => {
  const { t, i18n } = useTranslation();
    const trabajos = [
        {
          id: 1,
          nombre: t('beneficio1.name'),
          descripcion: t('beneficio1.description'),
          requisitos: [
            t('beneficio1.requisito1'),
            t('beneficio1.requisito2'),
            t('beneficio1.requisito3'),
            t('beneficio1.requisito4')
          ]
        },
        {
            id: 2,
            nombre: t('beneficio2.name'),
            descripcion: t('beneficio2.description'),
            requisitos: [
              t('beneficio2.requisito1'),
              t('beneficio2.requisito2'),
              t('beneficio2.requisito3')
            ]
          },
        {
            id: 3,
            nombre: t('beneficio3.name'),
            descripcion: t('beneficio3.description'),
            requisitos: [
              t('beneficio3.requisito1'),
              t('beneficio3.requisito2'),
              t('beneficio3.requisito3'),
              t('beneficio3.requisito4'),
              t('beneficio3.requisito5'),
              t('beneficio3.requisito6'),
              t('beneficio3.requisito7'),
              t('beneficio3.requisito8')
            ]
          },
        {
            id: 4,
            nombre: t('beneficio4.name'),
            descripcion: t('beneficio4.description'),
            requisitos: [
              t('beneficio4.requisito1'),
              t('beneficio4.requisito2'),
              t('beneficio4.requisito3'),
              t('beneficio4.requisito4'),
              t('beneficio4.requisito5'),
              t('beneficio4.requisito6'),
              t('beneficio4.requisito7'),
              t('beneficio4.requisito8'),
              t('beneficio4.requisito9')
            ]
          },


      ];
    
      return (
        <div className="container beneficios-trabajador-bg mt-5"> 
            <h1 className="text-center">{t('beneftrabaj')}</h1>
            <p className="text-center subtitulo-adulto-mayor">{t('subtitulo_adulto_mayor')}</p>
            <div className="row d-flex flex-wrap justify-content-center"> 
                {trabajos.map((trabajo) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={trabajo.id}>
                        <Carta_Empleo trabajo={trabajo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Empleo;