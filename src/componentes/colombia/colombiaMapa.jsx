import React from 'react'
import { Link } from "react-router-dom";
import '../estilos/colombia.css';

function Colombia() {
    return (
        <section className="colombiaSection">
        <Link  to={`/colombia-san-andres`} className="SanAndresMapa">
        <div className="tituloIzquierda">San Andrés</div>
        <div className="dashed"></div>
        <div className="puntoPais"> </div>
        </Link>
        </section>
    )
}

export default Colombia
