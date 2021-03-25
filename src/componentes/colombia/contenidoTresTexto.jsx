import React from 'react'
import fotoContent3 from '../imagenes/plasmaConvaleciente.png'
import NavegacionColombia from './navColombia'

function contenidoTresTexto() {
    return (
        <section className="sideContainer">
        <NavegacionColombia/>
            <section className="contentSidebar">
                <article className="internaBlog">
                    <figure>
                    <img src={fotoContent3} alt="ISA" className="fotoEntera" />
                    </figure>
                    <h2>Plasma de Convaleciente para pacientes con COVID-19
                    </h2>
                    <hr /> 
                    <div className="contentCapsule parrafoBlog">
                    <p>
                    La fase final del ensayo clínico del tratamiento con plasma de convaleciente, estudio controlado y aleatorizado en que se evaluaron 91 pacientes con COVID-19, mostró que quienes lo recibieron tuvieron un egreso hospitalario significativamente más temprano y requirieron, en promedio, 3 días menos de hospitalización al compararlos con aquellos que solo recibieron la terapia convencional.
                    <br /><br />
                    Esta es una de las conclusiones de los resultados finales de este estudio del grupo PC-COVID-19, conformado por investigadores de la Universidad del Rosario, el Instituto Distrital de Ciencia, Biotecnología e Innovación en Salud (IDCBIS), la Universidad CES, la Clínica del Occidente, el Hospital Universitario Mayor Méderi, la Clínica CES, la Fundación Universitaria de Ciencias de la Salud (FUCS), y Servicios y Asesoría en Infectología (SAI). Este proyecto fue financiado por la Universidad del Rosario, el Grupo ISA, el IDCBIS y Suramericana.
                    <br /><br />
                    El ensayo clínico incluyó 46 pacientes que recibieron plasma de convaleciente y terapia convencional; y 45 que solo recibieron terapia convencional. En los primeros se observó una tolerabilidad excelente al plasma.
                    </p>
                    </div>
            </article>
         </section> 
    </section>
    )
}

export default contenidoTresTexto
