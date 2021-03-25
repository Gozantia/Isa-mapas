import React from 'react'
import fotoContent1 from '../imagenes/proyectoOneHealth.jpg'
import NavegacionColombia from './navColombia'
import { Link } from "react-router-dom";

function ContenidoUno() {


    return (
      

        <section className="sideContainer">
        <NavegacionColombia/>
        <section className="contentSidebar">
        <main className="contentRegion">
            
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

export default ContenidoUno
