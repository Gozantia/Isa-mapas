import React from 'react'
import NavegacionPaises from './navPaises'
export default function BrasilSidebar() {
    return (
        <>
                    <section className="sideContainer">
            <NavegacionPaises/>
            <section className="contentSidebar">
                <div className="headerSidebar" >
                    <div >
                    <h2>Todos Somos Uno Brasil </h2>
                    <hr />
                    </div>
                    <div className="cifrasSidebar" >
                    <h3>Aporte total</h3>
                    <h2>USD 881,337</h2>
                    </div>
                </div>
                <article className="contentCapsule">
                   
             <ul>
                 <li>
                 Aporte a la Fundación Fiocruz para masificación de pruebas serológicas para la detección temprana de la COVID-19.                </li>
                 <li>
                 Entrega de uniformes no usados para ser aprovechados por comunidades vulnerables.                </li>
                 <li>
                 Aporte a BNDES Match Funding (campaña 1x1). Recolección de fondos para elementos de protección médica, compra de oxígeno e insumos hospitalarios. Por cada real donado por nuestros trabajadores en Brasil, ISA CTEEP aportó un valor equivalente.                 </li>
                 <li>
                 Campaña 1x4: por cada real donado por nuestro equipo de trabajo, ISA CTEEP aportó 4 reales más para aportar a la construcción de la planta de vacunas con el Instituto Butantan, centro de investigación en las áreas de biología y biomedicina, ubicado en la ciudad de São Paulo.                 </li>
                 <li>
                     Fondo de apoyo para iniciativas comunitarias para las regiones de Atacama, Coquimbo y Valparaíso, enfocadas en atender necesidades relacionadas con la pandemia, que planteen proyectos sostenibles, inclusión, accesibilidad y apoyo en la emergencia.</li>
             </ul>
                </article>
                </section>
        </section>
        </>
    )
}
