import React from 'react'
import NavegacionPaises from './navPaises'
export default function chileSidebar() {
    return (
        <>
                    <section className="sideContainer">
            <NavegacionPaises/>
            <section className="contentSidebar">
                <div className="headerSidebar" >
                    <div >
                    <h2>Todos Somos Uno Chile </h2>
                    <hr />
                    </div>
                    <div className="cifrasSidebar" >
                    <h3>Aporte total</h3>
                    <h2>USD 331,376</h2>
                    </div>
                </div>
                <article className="contentCapsule">
                   
             <ul>
                 <li>Apoyo para la producción de 10 ventiladores mecánicos. 
                </li>
                 <li>Más de 70.000 kits sanitarios entregados.
                </li>
                 <li>Dotación de elementos de protección para personal médico y población vulnerable. 
                </li>
                 <li>Voluntariado para acompañamiento a adultos mayores en poblaciones vulnerables, a través de llamadas o videollamadas semanales, entrega de alimentos y dotación para protección personal.
                </li>
                 <li>Fondo de apoyo para iniciativas comunitarias para las regiones de Atacama, Coquimbo y Valparaíso, enfocadas en atender necesidades relacionadas con la pandemia, que planteen proyectos sostenibles, inclusión, accesibilidad y apoyo en la emergencia.</li>
             </ul>
                </article>
                </section>
        </section>
        </>
    )
}
