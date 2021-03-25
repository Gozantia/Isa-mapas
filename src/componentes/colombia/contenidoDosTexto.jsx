import React from 'react'
import fotoContent2 from '../imagenes/masificacionPruebas.png'
import NavegacionColombia from './navColombia'

function contenidoDosTexto() {
    return (
        <section className="sideContainer">
        <NavegacionColombia/>
            <section className="contentSidebar">
                <article className="internaBlog">
                    <figure>
                    <img src={fotoContent2} alt="ISA" className="fotoEntera" />
                    </figure>
                    <h2>Masificación de pruebas diagnósticas para COVID-19
                    </h2>
                    <hr /> 
                    <div className="contentCapsule parrafoBlog">
                    <p>
                    A través de Innova por la Vida, liderado por Ruta N, aportamos la compra de 100.000 pruebas diagnósticas para COVID-19. Las pruebas son de dos tipos: moleculares basadas en la detección del material genético de virus (RNA) por la técnica y PCR-RT (PCR en tiempo real), extracción automatizada y protocolo Berlín. La estrategia de distribución estuvo concentrada en laboratorios departamentales (INS), reactivación económica y vigilancia médica y comunitaria.
                    </p>
                    </div>
            </article>
         </section> 
    </section>
    )
}

export default contenidoDosTexto
