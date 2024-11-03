import React from 'react';
import { useTranslation } from 'react-i18next';
import Carta_Empleo from '../componentes/Carta_Empleo';
import '../App.css';


const Empleo = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('idioma', newLanguage)
};
    const trabajos = [
        {
          id: 1,
          nombre: 'Subsidio al sueldo mínimo para Mipymes',
          descripcion: 'Este subsidio consiste en un pago que se entrega mensualmente a micro, pequeñas y medianas empresas, cooperativas, personas jurídicas sin fines de lucro (como fundaciones) y comunidades. Este pago permite cumplir con el nuevo sueldo mínimo establecido y no está afecto a impuesto alguno.',
          requisitos: [
            'Tengan inicio de actividad en primera categoría antes del 8 de mayo de 2023, como persona natural o jurídica, incluidas las cooperativas. Las empresas que inicien actividades posterior a esta fecha pueden acceder desde septiembre de 2023, si cumplen los requisitos.',
            'Tengan  uno o más trabajadores/as con sueldo mínimo,  o con ingreso imponible entre 411.000 y 500.000, de acuerdo al período contemplado en la Ley.',
            'Que las ventas y servicios del giro sean  superiores a 0,01 Unidades de Fomento (UF) e iguales o inferiores a 100.000 UF en 2022.',
            'Sean  personas jurídicas sin fines de lucro y comunidades  constituidas antes del 8 de mayo de 2023.',
          ]
        },
        {
            id: 2,
            nombre: 'Subsidio Protege',
            descripcion: 'El Subsidio Protege es un beneficio destinado a madres que trabajen de manera dependiente o independiente, que no tengan garantizado el derecho a sala cuna por parte de su empleador/a. Consiste en un aporte mensual de $200.000 por cada niño o niña de hasta cuatro años, el que se entregará directamente a las madres trabajadoras para que lo destinen al cuidado de las niñas y niños. También podrán acceder al beneficio los padres trabajadores, dependientes o independientes, que tengan el cuidado personal de manera exclusiva o que se les haya otorgado el cuidado personal de un niño o niña menor de cinco años. El beneficio tendrá una duración de tres meses.',
            requisitos: [
              'Estar trabajando, de manera dependiente o independiente, en modalidad presencial, teletrabajo, a distancia o mixta.',
              'Si eres trabajador/a dependiente debes tener cuatro cotizaciones (Salud y AFP) pagadas en los últimos doce meses previos a la postulación. Una de estas cuatro cotizaciones debe ser del mes previo a la postulación. Por ejemplo, si postulas en enero 2022 debes tener pagada la cotización de la remuneración de diciembre 2021 y, al menos, otras tres cotizaciones entre enero 2021 y noviembre 2021.',
              'Si eres trabajador/a independiente debes haber cotizado como independiente en la última operación renta (2022) con aporte de cotizaciones Total o Parcial. Otra alternativa es que cuentes con cuatro cotizaciones (salud y AFP) en los últimos doce meses. Una de estas cuatro cotizaciones debe ser del mes previo a la postulación.',
            ]
          },
        {
            id: 3,
            nombre: 'Bono al Trabajo de la Mujer',
            descripcion: 'Es un aporte monetario que se entrega a mujeres trabajadoras entre 25 y 59 años, que pertenecen al 40% de las familias de menores ingresos de la población. El monto del bono se calcula, caso a caso, en base a las rentas brutas del año en que postulan al beneficio. El beneficio se entrega en el mes de agosto del año siguiente a la postulación, a través de un pago anual. Sin embargo, la beneficiaria puede acceder a adelantos mensuales equivalentes al 75% del monto total del bono o al 50% en caso de cursar el cuarto año de solicitud del beneficio.  La trabajadora puede recibir este beneficio durante cuatro años continuos. Si quieres encontrar más información, te recomendamos visitar el sitio web de Sence.',
            requisitos: [
              'Ser mujer y estar trabajando de forma dependiente o independiente.',
              'Tener entre 25 años y 59 años con 11 meses de edad.',
              'Pertenecer al 40% de la población más vulnerable del país, según el Registro Social de Hogares (RSH).',
              'No debes trabajar en una institución del Estado o en una empresa con aporte estatal superior al 50%.',
              'Si quieres recibir el Pago anual, debes percibir una renta bruta anual inferior a $7.278.446.',
              'Si quieres recibir el Pago mensual, debes percibir una renta bruta mensual inferior a $606.537',
              'Adicionalmente, si eres trabajadora independiente, deberás acreditar rentas para el año calendario en que solicitas el bono y deberás estar al día en el pago de tus cotizaciones previsionales y de salud.',
              'No debes ser beneficiaria del Ingreso Mínimo Garantizado para el período de renta procesado.'
            ]
          },
        {
            id: 4,
            nombre: 'Subsidio al Empleo Joven',
            descripcion: 'Es un aporte monetario que busca mejorar el sueldo de trabajadoras y trabajadores jóvenes, que pertenecen al 40% más vulnerable de la población, e incentivar la contratación de personas jóvenes por parte de las y los empleadores. El monto del subsidio* (aporte monetario) se calcula caso a caso, a partir de las rentas brutas del año en que postulan al beneficio.',
            requisitos: [
              'Tener un trabajo formal vigente o ser trabajador/a independiente.',
              'Debes tener entre 18 y 24 años.',
              'Certificar que perteneces al 40% más vulnerable de la población, según el Registro Social de Hogares',
              'Si eres mayor de  21 años , contar con Licencia de Enseñanza Media',
              'No debes trabajar en una institución del Estado  o en una empresa con aporte estatal superior al 50%.',
              'Trabajador/a dependiente: debes acreditar una renta bruta anual inferior a $7.278.446. Si deseas optar a la modalidad de subsidio mensual debes acreditar una renta bruta inferior a $606.537.',
              'Trabajador/a independiente: debes acreditar una renta bruta anual inferior a $7.278.446.',
              'Adicionalmente, si eres trabajador/a independiente debes acreditar rentas para el año calendario en que solicitas el subsidio y estar al día en el pago de tus cotizaciones previsionales y de salud.',
              'No debes ser beneficiario(a) del Ingreso Mínimo Garantizado para el período de renta procesado.'
            ]
          },


      ];
    
      return (
        <div className="container beneficios-trabajador-bg mt-5"> 
            <h1 className="text-center">Beneficios para el Trabajador</h1>
            <button onClick={toggleLanguage} className="btn btn-secondary mb-3">
            {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
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