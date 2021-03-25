import React from 'react'
import NavegacionPaises from '../navPaises'
import NavColombiaDos from './navColombiaDos'

function ColombiaSidebar() {
    return (
        <>
        <section className="sideContainer">
            <NavegacionPaises/>
            <section className="contentSidebar">
                <div className="headerSidebar" >
                    <div >
                    <h2>Colombia</h2>
                    <hr />
                    </div>
                    <div className="cifrasSidebar" >
                    <h3>Aporte total</h3>
                    <h2>USD 2,702,703</h2>
                    </div>
                </div>
                <article className="contentCapsule contentColombia">
                    <h2>Acción País</h2>
                    <p>
                    Esta iniciativa está enfocada en la reactivación económica y la atención en salud: pruebas diagnósticas, elementos de protección para el personal médico, desarrollo e investigación para generación de capacidades locales. Así nos unimos desde Colombia. 
                    </p>
                </article>
                <NavColombiaDos/>
                </section>
        </section>
        </>
    )
}

export default ColombiaSidebar
