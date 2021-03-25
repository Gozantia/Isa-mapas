import React from 'react'
import fotoContent1 from '../imagenes/proyectoOneHealth.jpg'
import NavegacionColombia from './navColombia'
function contenidoUno() {
    return (
      

<section className="sideContainer">
<NavegacionColombia/>
<section className="contentSidebar">
    <main className="contentRegion">
           <article>
           <img src={fotoContent1} alt="" className="imgContent"/>
           <h3>Proyectos de Investigación
            aplicada – One Health </h3>
            <hr />
           </article>
       </main>
    </section>
</section>



    )
}

export default contenidoUno
