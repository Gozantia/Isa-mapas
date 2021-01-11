import React from 'react'
import { Link} from "react-router-dom";

function colombia({mostrarSideBar}) {
    return (
        <section className="colombiaSection">
        <Link to={`/colombia/sanAndres`} className="SanAndresMapa" onClick={ mostrarSideBar }>
        <div className="tituloIzquierda">San Andrés</div>
        <div className="dashed"></div>
        <div className="puntoPais"> </div>
        </Link>
        </section>
    )
}

export default colombia
