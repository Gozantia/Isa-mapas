import React from 'react'
import NavegacionPaises from './navPaises'
export default function PeruSidebar() {
    return (
        <>
                    <section className="sideContainer">
            <NavegacionPaises/>
            <section className="contentSidebar">
                <div className="headerSidebar" >
                    <div >
                    <h2>Todos Somos Uno Perú </h2>
                    <hr />
                    </div>
                    <div className="cifrasSidebar" >
                    <h3>Aporte total</h3>
                    <h2>USD 630,400</h2>
                    </div>
                </div>
                <article className="contentCapsule">
                   
             <ul>
                 <li>
                 Convenio Pontificia Universidad Católica del Perú y el Ministerio de Salud para la construcción de 100 ventiladores mecánicos para fortalecer la atención de las unidades de cuidados intensivos del país.                 </li>
                 <li>
                 Convenio con la Universidad Cayetano Heredia para financiar un proceso de investigación para pruebas rápidas de bajo costo y rápida respuesta.                 </li>
                 <li>
                 Entrega de alimentos y elementos de protección personal para poblaciones vulnerables de extrema pobreza en diferentes departamentos del país.                 </li>
                 <li>
                 Aporte para la financiación de una planta de oxígeno para ayudar a la recuperación de los pacientes que sufren dificultades respiratorias del Hospital Julio César Demarini Caro en La Merced.                </li>

             </ul>
                </article>
                </section>
        </section>
        </>
    )
}
