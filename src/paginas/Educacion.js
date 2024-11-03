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
          nombre: 'Bono Logro Escolar',
          descripcion: 'Es un beneficio al cual no se postula y que forma parte del Ingreso Ético Familiar (IEF). Está destinado a estudiantes menores de 24 años, de entre quinto básico y cuarto medio, que pertenezcan al 30% de mejor rendimiento académico de su promoción, y cuyas familias pertenezcan al 30% más vulnerable de la población chilena.',
          requisitos: [
            'Que sus familias sean beneficiarias del subsistema Seguridades y Oportunidades del Ingreso Ético Familiar (IEF).',
            'Estar dentro del 30% más vulnerable de la población según al Registro Social de Hogares (RSH)., al 31 de marzo del año inmediatamente anterior a aquel en que se pague el Bono. Atención: Si tu cartola hogar indica que estás dentro del 40%, no implica necesariamente que estés dentro del 30% más vulnerable.',
            'Cursar entre 5º básico y 4º medio.',
            'Estar en el 30% de mejor rendimiento académico de su promoción o grupo de egreso durante el año anterior al que se postula.',
            'Haber asistido a establecimientos de enseñanza básica o media reconocidos por el Ministerio de Educación (Mineduc).'
          ]
        },
        {
            id: 2,
            nombre: 'Beca Práctica Técnico Profesional',
            descripcion: 'La Beca Práctica Técnico Profesional (BPTP) es un beneficio de 65 mil pesos de libre disposición o uso, pagados en una cuota, a estudiantes o egresados/as de enseñanza media técnico-profesional, que estén realizando o vayan a iniciar su práctica profesional dentro del año en curso.',
            requisitos: [
              'Ser estudiante o egresado/a de un establecimiento educacional de Enseñanza Media Técnico Profesional.',
              'Debes realizar o iniciar la práctica profesional durante el año en curso.',
              'Puedes postular si iniciaste tu práctica el año anterior y el proceso continúa durante el año en curso.',
              'Presentar un informe de práctica del establecimiento educacional (completar anexo Nº 10).',
              '*** Importante: quienes postulen no deben haber sido beneficiarios/as de la bonificación en años anteriores.'
            ]
          },
        {
            id: 3,
            nombre: 'Beca de Integración Territorial - Educación Media',
            descripcion: 'Es un aporte económico destinado a cubrir parte de los gastos de mantención y transporte para estudiantes de educación media de las provincias de Coyhaique, Aysén, General Carrera, Capitán Prat, Isla de Pascua, Palena, Última Esperanza, Magallanes, Tierra del Fuego, Antártica Chilena y en la comuna de Juan Fernández. El monto del beneficio corresponde a 18,7 UTM anuales, las que se pagan en 10 cuotas mensuales.',
            requisitos: [
              'Tener domicilio en la Región de Aysén o de Magallanes, en las provincias de Palena, o en las comunas de Isla de Pascua o Juan Fernández',
              'Necesitas trasladarte y vivir fuera de las localidades en las que resides para poder realizar tus estudios.',
              'Debes estudiar en establecimientos educacionales reconocidos por el Estado que no tengan oferta en tu localidad de residencia.',
              'Debes estar dentro del 80% más vulnerable según el Registro Social de Hogares (RSH) .',
              'Necesitas tener un promedio mínimo de notas de 5,0 (Se exime de este requisito a estudiantes de Educación Especial)',
              'Si estás en el Registro Nacional de Discapacidad (RND) tendrás acceso preferente'
            ]
          },
        {
            id: 4,
            nombre: 'Beca Polimetales - Educación Media',
            descripcion: 'Es un aporte económico de libre disposición dirigido a estudiantes afectados por la contaminación de las zonas con presencia de polimetales de la comuna de Arica, que se encuentren estudiando entre primero y cuarto medio en establecimientos educacionales reconocidos por el Estado. El beneficio corresponde a 6,2 UTM anuales y se paga en hasta 10 cuotas mensuales. ',
            requisitos: [
              'Estar matriculado en algún establecimiento educacional de educación media reconocido por el Estado.',
              'Acreditar la condición de afectado por la contaminación de polimetales de la comuna de Arica.',
              'Certificado que acredita la condición de afectado por la contaminación de polimetales.',
              'Certificado de matrícula o de alumno regular que indique su curso en un establecimiento reconocido por el Estado.',
              'En caso de renovación, necesitarás también el certificado de notas que acredite la aprobación del año académico anterior.'
            ]
          },
        {
            id: 5,
            nombre: 'Programa Residencia Familiar Estudiantil (PRFE) – Educación media',
            descripcion: 'Es un beneficio que entrega alojamiento en hogares de familias tutoras a estudiantes que deben trasladarse de su comuna de residencia para continuar sus estudios de educación media. También consiste en apoyo de alimentación y en el ámbito pedagógico para facilitar la continuación y la finalización de los estudios de educación media. ',
            requisitos: [
              'Tienes que residir en comunas que tengan al menos un 50% de ruralidad.',
              'Debes ser estudiante de algún establecimiento particular subvencionado de Enseñanza Media.',
              'Tienes que estar inscrito/a en el Registro Social de Hogares (RSH)',
            ]
          },
        {
            id: 6,
            nombre: 'Programa Residencia Familiar Estudiantil (PRFE) – Educación superior',
            descripcion: 'Es un beneficio que entrega alojamiento en hogares de familias tutoras a estudiantes que deben trasladarse de su comuna de residencia para continuar sus estudios superiores. También consiste en apoyo de alimentación y en el ámbito pedagógico para facilitar la continuación y la finalización de los estudios de educación superior.',
            requisitos: [
              'Tienes que residir en comunas que tengan al menos un 50% de ruralidad.',
              'Debes ser estudiante en alguna Institución de Educación Superior reconocida por el Estado.',
              'Tienes que estar inscrito/a en el Registro Social de Hogares (RSH). ',
            ]
          },
          {
            id: 7,
            nombre: 'Beca Residencia Insular (BRINS)',
            descripcion: 'Es un aporte económico destinado a cubrir parte de los gastos de arriendo para estudiantes que residen en Isla Juan Fernández e Isla de Pascua y que estudian en instituciones de educación superior reconocidas por el Estado. El monto del beneficio corresponde a $981.580 y se paga hasta en 10 cuotas al año.',
            requisitos: [
              'Tienes que residir en la Isla Juan Fernández o en la Isla de Pascua.',
              'Debes estar matriculado/a en una institución de Educación Superior reconocidas por el Estado.',
              'Tienes que estar inscrito/a en el Registro Social de Hogares (RSH).',
            ]
          }


      ];
    
      return (
        <div className="container educacion-bg mt-5"> 
            <h1 className="text-center">Cursos de Educación Media</h1>
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