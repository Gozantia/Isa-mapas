import React from 'react'
import fotoContent1 from '../imagenes/proyectoOneHealth.jpg'
import NavegacionColombia from './navColombia'

function contenidoUnoTexto() {
    return (
        <section className="sideContainer">
        <NavegacionColombia/>
            <section className="contentSidebar">
                <article className="internaBlog">
                    <figure>
                    <img src={fotoContent1} alt="ISA" className="fotoEntera" />
                    </figure>
                    <h2>Proyectos de Investigación
                    aplicada – One Health
                    </h2>
                    <hr /> 
                    <div className="contentCapsule parrafoBlog">
                    <h4> 1. Brigadas médicas</h4>
                    <p>
                    Con el propósito de aportar a la atención de la contingencia por COVID-19 en Colombia, las Brigadas médicas ISA/One-Health han visitado más de 20 municipios en ocho departamentos del país para desarrollar jornadas de toma de muestras PCR para el diagnóstico del virus, atención a la población en condición de vulnerabilidad, sensibilización para la prevención del contagio y toma de muestras de sangre para precisar las estadísticas de contagio y optimizar la toma de decisiones en salud pública por parte de las autoridades locales. 
                   <br />
                    Más de 2.861 pruebas realizadas. 
                    Un aporte de nuestra filiales XM e ISA Transelca. </p>
                    </div>
            </article>
         </section> 
    </section>
    )
}

export default contenidoUnoTexto
