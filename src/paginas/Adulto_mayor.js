import React from 'react';
import Carta_Adulto_Mayor from '../componentes/Carta_Adulto_Mayor';
import '../App.css'

const AdultoMayor = () => {
    const menuItems = [
        {
          id: 1,
          nombre: 'Subsidio de Arriendo para Personas Mayores y Personas con Discapacidad',
          descripcion: 'Es un aporte económico dirigido a personas de 60 años o más y para personas que tengan una condición de discapacidad (independiente de su edad), que no cuenten con ingresos suficientes para el pago de un arriendo. Este subsidio contribuye con una parte del valor de arriendo de una vivienda. El monto recibido del subsidio depende del tramo del Registro Social de Hogares (RSH) en el que se ubique la persona que solicita el beneficio. Este subsidio cubrirá entre el 90% y 95% del valor del arriendo mensual (de esta manera la persona beneficiaria deberá aportar como copago entre un 5 y un 10% del arriendo). El subsidio se otorga por 24 meses, el cual puede ser utilizado de manera consecutiva en un plazo máximo de ocho años.',
          requisitos: [
            'Personas de 60 años o más, y personas que tengan una condición de discapacidad.',
            'Que tengan cédula de identidad chilena.',
            'Que pertenezcan al 70% más vulnerable de la población según el Registro Social de Hogares (RSH).',
            'Que cuenten con un ingreso mínimo de 5 UF (180 mil pesos aproximadamente).'
          ]
        },
        {
            id: 2,
            nombre: 'Asignación por Muerte',
            descripcion: 'Permite a las personas que no están afiliadas a acceder a un monto para cubrir los gastos funerarios. Este equivale a tres ingresos mínimos vigentes a la fecha del fallecimiento. Durante el 2024, este beneficio corresponde a $966.885 pesos para beneficiarios/as de Pensión Básica Solidaria (PBS) y a 15 Unidades de Fomento (UF) para beneficiarios/as de Pensión Garantizada Universal (PGU).',
            requisitos: [
              'Haber sido beneficiario o beneficiaria de la Pensión Básica Solidaria (PBS) antes del 1 febrero 2022.',
              'Haber sido beneficiario o beneficiaria de la Pensión Garantizada Universal (PGU) desde el 1 febrero 2022.',
              'Haber tenido, al menos, una cotización en alguna de las ex cajas de previsión dentro de los últimos seis meses anteriores a su fallecimiento.',
              'Haber sido beneficiario o beneficiaria de Subsidio de Incapacidad Laboral, Subsidio de Cesantía o Subsidio de Discapacidad.',
              'Haber sido pensionado o pensionada de las ex cajas de previsión y leyes especiales. Se exceptúan las personas pensionadas de orfandad y convivencia (madre de hijos o hijas de filiación no matrimonial).'
            ]
          },
        {
            id: 3,
            nombre: 'Rebaja Tarifaria Transporte para Adultos Mayores',
            descripcion: 'Todas las personas de 65 años o más del país tienen acceso a una rebaja de la tarifa de transporte público de 50%, es decir, una rebaja que permitirá que paguen la mitad del pasaje. Este beneficio podrá ser utilizado por las personas mayores en más de 31 mil buses a lo largo del país, incluidos todos los buses urbanos, el Metro de Valparaíso (Merval), los troles en Valparaíso, Biotren de la región del Biobío, las lanchas subsidiadas en el sur del país y los buses rurales. Particularmente  en Santiago, con esta rebaja, las personas mayores pagarán $350 al usar el sistema integrado de transporte público (buses, Metro y Metrotren), independientemente del horario o la cantidad de combinaciones que se realicen. Si eres una persona mayor podrás hacer uso de este beneficio en cualquier región, sin importar tu lugar de residencia.',
            requisitos: [
              'Deberás contar con la tarjeta Bip! Adulto Mayor, de uso personal e intransferible.',
              'Si tienes entre 65 y 74 años puedes solicitar tu tarjeta Bip! Adulto Mayor en www.tarjetabip.cl con tu ClaveÚnica. La tarejta tiene un valor de $1.550 y si deseas que esta sea enviada a tu domicilio, el despacho cuesta $1.529. La tarjeta también puede ser solicitada por un/a apoderado/a acreditado/a ante el Instituto de Previsión Social (IPS), realizando el mismo trámite que se ejecuta para el cobro de pensión.',
              'Si actualmente tienes la Tarjeta Adulo Mayor de Metro de Santiago (TAM), al inscribirte para recibir la Bip! Adulto Mayor, la tarjeta TAM perderá automáticamente su vigencia.'
            ]
          },
        {
            id: 4,
            nombre: 'Bono Bodas de Oro',
            descripcion: 'Es un beneficio económico que se otorga a parejas con 50 años de matrimonio y que cumplan con los requisitos establecidos por la ley. El valor actual del bono es $425.360 y tiene las siguientes características se entrega una sola vez en partes iguales: $212.680 para cada cónyuge con vida, Debe ser solicitado en conjunto por ambos cónyuges, Una vez que el matrimonio cumple su aniversario 50, existe un plazo de un año para realizar el trámite.',
            requisitos: [
              'Que los cónyuges no estén separados o divorciados (término del matrimonio por cualquier causa legal).',
              'Se encuentren en el Registro Social de Hogares (RSH) y, de acuerdo a su calificación, pertenezcan al 80% más vulnerable de la población.',
              'Convivan en el mismo hogar o acrediten residencia en Establecimiento de Larga Estadía para el Adulto Mayor (uno o ambos), reconocido por la autoridad correspondiente.',
              'Acreditan residencia en el territorio nacional por un período de cuatro años, dentro de los últimos cinco años inmediatamente anteriores a la fecha de la presentación de la solicitud.',
              'Si habiendo cumplido 50 años de matrimonio, un/a cónyuge fallece después de esa fecha, la persona que sobrevive puede optar a su parte del bono.',
              'Si habiendo presentado la solicitud y verificado el cumplimiento de los requisitos, un/a cónyuge fallece durante la tramitación del beneficio, una vez que se conceda el monto correspondiente, formará parte de la herencia.'
            ]
          },
        {
            id: 5,
            nombre: 'Bono por Hijo',
            descripcion: 'Es un beneficio que incrementa el monto de la pensión de la mujer  a través de la entrega de un  bono por cada hijo/a nacido/a vivo/a o adoptado/a.  Este bono no se paga al momento del nacimiento, sino que junto a su pensión. La bonificación se fija y comienza a generar rentabilidad desde la fecha del nacimiento del hijo o hija, y equivale al 10% de 18 ingresos mínimos mensuales. Este beneficio se calcula de la siguiente forma Si el hijo o hija nació antes del 1 de julio de 2009, se aplicará el ingreso mínimo vigente en julio de 2009 ($165.000), Si el hijo o hija nació después del 1 de julio de 2009, el ingreso mínimo corresponderá al monto que estaba vigente durante el mes del nacimiento',
            requisitos: [
              'Ser madre y haber cumplido 65 años.',
              'Tener cédula de identidad vigente. Si el trámite es realizado por un apoderada o apoderado, necesitará un poder notarial.',
              'Debes haber residido en territorio chileno por un período de 20 años (continuos o discontinuos), contados desde que cumpliste 20 años. Asimismo, tienes que haber residido en Chile al menos cuatro de los últimos cinco años previos a la solicitud de la bonificación.',
              'Estar afiliada a alguna AFP y haber obtenido tu pensión desde el 1 de julio de 2009.',
              'Recibir la Pensión Garantizada Universal (PGU) (que reemplazó a la Pensión Básica Solidaria de Vejez).',
              'Si no estás afiliada a un régimen previsional debes recibir una Pensión de Sobrevivencia (con Aporte Previsional Solidario de Vejez) otorgada por una AFP, compañía de seguros o el Instituto de Previsión Social (IPS), a contar del 1 de julio de 2009.'
            ]
          },
        {
            id: 5,
            nombre: 'Acceso Gratuito para Personas Mayores a Parques',
            descripcion: 'Las personas mayores tienen acceso gratuito a los parques, reservas nacionales, y monumentos naturales, que integran el Sistema Nacional de Áreas Silvestres Protegidas del Estado (SNASPE), que administra la Corporación Nacional Forestal (CONAF).',
            requisitos: [
              'Debes tener 60 años o más.',
              'Al ingreso del parque, reserva o monumento debes mostrar tu cédula de identidad y podrás entrar de manera gratuita.',
              'Puedes revisar las reservas, parques y monumentos que integran el Sistema en el sitio web de la CONAF.',
            ]
          },

      ];
    
      return (
        <div className="container adulto-mayor-bg mt-5">
          <h1 className="text-center">Beneficios para Adultos Mayores</h1>
          <div className="row d-flex flex-wrap justify-content-center"> {/* Flex para ajustar la distribución */}
            {menuItems.map((item) => (
              <div className="col-12 col-sm-6 col-md-6 mb-4 d-flex" key={item.id}> {/* Máximo 2 columnas en pantallas grandes */}
                <Carta_Adulto_Mayor subsidio={item} />
              </div>
            ))}
          </div>
        </div>
      );
    };

export default AdultoMayor;