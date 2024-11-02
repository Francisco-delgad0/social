import React from 'react';
import Carta_Pensiones from '../componentes/Carta_Pensiones';
import '../App.css';


const Penciones = () => {
    const retribuciones = [
        {
          id: 1,
          nombre: 'Pensión Garantizada Universal',
          descripcion: 'La Pensión Garantizada Universal (PGU) es un beneficio que reemplazó las pensiones del pilar solidario de vejez (tanto la Pensión Básica Solidaria-PBS como el Aporte Previsional Solidario-APS). Desde febrero del 2024, el monto de la PGU es de $214.296 pesos mensuales*. Este monto se suma a la pensión autofinanciada con los ahorros previsionales (AFP). Desde febrero de 2022, las personas beneficiarias de una pensión del Pilar Solidario reciben automáticamente la PGU (exceptuando algunos casos, detallados más abajo). Desde agosto del mismo año, la PGU beneficia a todas las personas mayores de 65 años que pertenezcan al 90% más vulnerable**. El beneficio se entrega independientemente de que las personas mayores ya se hayan pensionado o sigan trabajando. Para recibir la PGU, tu pensión autofinanciada debe ser inferior a $1.158.355 mensuales. En caso de que tu pensión autofinanciada sea superior a $729.764, recibirás una fracción del monto total de la PGU (puedes revisar el detalle de estos montos más abajo). Si aún no recibes el beneficio y cumples con todos los requisitos debes solicitarlo.',
          requisitos: [
            'Tener 65 años o más.',
            'No integrar un hogar del 10% más rico de la población mayor de 65 años.',
            'Tener residencia en Chile por al menos 20 años (continuos o discontinuos) desde los 20 años de la persona que solicita el beneficio. Además debe haber residido en Chile al menos cuatro de los cinco últimos años previo a la solicitud.',
            'No tener derecho a pensión o contar con una pensión base menor a la pensión superior ($1.158.355).',
            'No estar afiliado en DIPRECA o CAPREDENA.'
          ]
        },
        {
            id: 2,
            nombre: 'Pensión Básica Solidaria de Invalidez (PBSI)',
            descripcion: 'Es un beneficio económico mensual para personas que puedan ser declaradas con invalidez*, que no tengan derecho a una pensión en algún régimen previsional y que pertenecen al 80% más vulnerable de la población. El monto de este beneficio es de máximo $214.296. Este valor se reajustará todos los febrero desde 2023.',
            requisitos: [
              'Debes tener entre 18 y 64 años al momento de la solicitud.',
              'No debes recibir pensión en ningún régimen previsional, ya sea en calidad de titular o como beneficiario de una pensión de sobrevivencia.',
              'Debes ser declarado o declarada con invalidez por las Comisiones Médicas correspondientes, definidas en el Decreto Ley N° 3.500.',
              'Que integren un grupo familiar perteneciente al 80% más vulnerable de la población según el Registro Social de Hogares (RSH).',
              'Haber vivido en Chile por, al menos, cinco de los últimos seis años anteriores a la fecha en que ingresas tu solicitud. Estos cinco años pueden ser continuos o discontinuos*.',
              'No debes ausentarte del país por un período mayor a 90 días durante el año calendario (de enero a diciembre).',
              'Tener tu cédula de identidad vigente.'
            ]
          },
        {
            id: 3,
            nombre: 'Aporte Previsional Solidario de Invalidez (APSI)',
            descripcion: 'Es un beneficio económico mensual para las personas que reciben pensiones de invalidez* de bajo monto, es decir, para personas que reciben pensiones menores a la Pensión Garantizada Universal (PGU) $214.296. Estas pensiones son destinadas a personas que no puede llevar a cabo un trabajo, ya sea por condiciones físicas o por alguna discapacidad intelectual. Esta condición la declaran las Comisiones Médicas correspondientes, definidas en el Decreto Ley N° 3.500.',
            requisitos: [
              'Tener entre 18 y 64 años al momento de la solicitud.',
              'Recibir una pensión de invalidez mensual o una pensión base inferior al monto de la Pensión Básica Solidaria.',
              'haber sido declarado o declarada con invalidez por las Comisiones Médicas correspondientes, definidas en el Decreto Ley N° 3.500.',
              'Que integren un grupo familiar perteneciente al 80% más pobre de la población según el Registro Social de Hogares (RSH).',
              'Haber vivido en Chile por al menos cinco de los últimos seis años anteriores a la fecha en que ingresas tu solicitud. Estos 5 años pueden ser continuos o discontinuos.',
              'No debes cotizar en la Dirección de Previsión de Carabineros de Chile (DIPRECA), ni en la Caja de Previsión de la Defensa Nacional (CAPREDENA).',
              'No debes ausentarte del país por un período mayor a 90 días durante el año calendario (de enero a diciembre).',
              'Tener tu cédula de identidad vigente.'
            ]
          },
        {
            id: 4,
            nombre: 'Aguinaldo por Fiestas Patrias para Pensionados/as',
            descripcion: 'Se trata de un beneficio que se paga en septiembre de cada año, a todas las personas beneficiarias de pensiones que cumplan con los requisitos establecidos. El monto del aguinaldo el 2024 es de $24.261. A eso se le suman $12.446 por cada carga familiar que esté acreditada al 31 de agosto de 2024',
            requisitos: [
              'Pensionados/as de las ex-cajas de previsión.',
              'Pensionados/as de las leyes de Exonerados/as Políticos/as, Ley 19.234.',
              'Pensionados/as de la Ley de Reparación 19.123 (Ley Rettig).',
              'Pensionados/as de la Ley de Reparación 19.992 (Ley Valech).',
              'Pensionados/as de Accidentes del Trabajo, Ley 16.744, del Instituto de Seguridad Laboral.',
              'Beneficiarios/as de la Pensión Garantizada Universal.',
              'Beneficiarios/as de la Pensión Básica Solidaria de Invalidez',
              'Personas que reciben Subsidio por Discapacidad Mental, Art. 35 de la Ley N° 20.255.',
              'Beneficiarios/as de Indemnizaciones del Carbón, Ley N° 19.129.'
            ]
          },
        {
            id: 5,
            nombre: 'Aguinaldo de Navidad para Pensionados/as',
            descripcion: 'Se trata de un beneficio que se paga en diciembre de cada año a las personas pensionadas al 30 de noviembre y que cumplan los requisitos. La entrega de este aguinaldo se hace junto al pago de la pensión de diciembre. El monto del aguinaldo este 2023 es de $26.734, y se puede incrementar en $15.104 por cada carga familiar.',
            requisitos: [
              'Beneficiarios/as de la Pensión Garantizada Universal o de la Pensión Básica Solidaria de Invalidez (PBSI)',
              'Pensionados/as del Instituto de Seguridad Laboral (ISL).',
              'Pensionados/as de las ex Cajas de Previsión y ex Servicio de Seguro Social (INP, actualmente IPS).',
              'Pensionados/as de Caja de Previsión de Dipreca y Capredena.',
              'Pensionados/as de las Mutualidades de Empleadores de la Ley Nº 16.744.',
              'Pensionados/as de reparación: Rettig y Valech.',
              'Pensionados/as de AFP o compañías de seguro con garantía estatal o Aporte Previsional Solidario (de Vejez o de Invalidez).',
              'Beneficiarios/as de la indemnización compensatoria especial para la industria del carbón.',
              'Beneficiarios/as del Subsidio por Discapacidad Mental.'
            ]
          },
        {
            id: 6,
            nombre: 'Pensión de Sobrevivencia del Sistema de Pensiones (AFP)',
            descripcion: 'Permite a personas beneficiarias de imponentes y pensionados/as que fallecieron y estaban afiliados/as al sistema de Administradoras de Fondos de Pensiones (AFP) solicitar la pensión de sobrevivencia.',
            requisitos: [
              '50% para la o el cónyuge con hijos/as comunes.',
              '60% para la o el cónyuge si no existen hijos/as en común.',
              '60% para la o el cónyuge sin hijos/as en común o hijos/as solamente de la o el causante.',
              '50% para la o el conviviente civil con hijos/as en común.',
              '15% para la o el conviviente civil si es que existen hijos/as de la o el causante y no hay hijos/as en común.',
              '36% para la madre y/o padre de hijos/as no matrimoniales que no tienen derecho a pensión.',
              '30% para la madre y/o padre de hijos/as que tienen derecho a pensión.',
              '15% para hijos/as que cumplan los requisitos (ver campo "Beneficiarios/as").',
              '11% para hijos/as con discapacidad parcial que cumplan 24 años.',
              '50% para las madres y padres de la o el causante que sean beneficiarios/as de asignación familiar.'
            ]
          },


      ];
    
      return (
        <div className="container benficios-bg mt-5"> 
            <h1 className="text-center">Pensiones para el ciudadano</h1>
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