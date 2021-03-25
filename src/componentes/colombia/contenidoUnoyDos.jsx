import React from 'react'
import fotoContent2 from '../imagenes/masificacionPruebas.png'
import fotoContent1 from '../imagenes/proyectoOneHealth.jpg'
import NavegacionColombia from './navColombia'
import { Link } from "react-router-dom";

function ContenidoUnoyDos() {


    return (
      

        <section className="sideContainer">
        <NavegacionColombia/>
        <section className="contentSidebar">
        <main className="contentRegion">
            
            <Link to="/masificacion-pruebas-covid-19"> 
            <article >
            <img src={fotoContent2} alt="ISA" className="imgContent"/>
            <h3>Masificación de pruebas diagnósticas para COVID-19 </h3>
             <hr />
            </article>
            </Link>
            <Link to="/proyectos-one-health"> 
            <article >
            <img src={fotoContent1} alt="ISA" className="imgContent"/>
            <h3>Proyectos de Investigación
             aplicada – One Health </h3>
             <hr />
            </article>
            </Link>
        </main>
        </section>
        </section>



    )
}

export default ContenidoUnoyDos
