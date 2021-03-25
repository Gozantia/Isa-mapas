import React from 'react'
import fotoContent3 from '../imagenes/plasmaConvaleciente.png'
import NavegacionColombia from './navColombia'
import { Link } from "react-router-dom";

function ContenidoTres() {


    return (
      

        <section className="sideContainer">
        <NavegacionColombia/>
        <section className="contentSidebar">
        <main className="contentRegion">
            
            <Link to="/plasma-convaleciente-covid-19"> 
            <article >
            <img src={fotoContent3} alt="ISA" className="imgContent"/>
            <h3>Plasma de Convaleciente para pacientes con COVID-19 </h3>
             <hr />
            </article>
            </Link>
        </main>
        </section>
        </section>



    )
}

export default ContenidoTres
