import React from 'react'
import { Link } from "react-router-dom";


const Home = ({mostrarSideBar, show})  => (
    
    
    <section className="cuerpo">
        
        <article className="slogan">
        <div> 
            Cuando somos conscientes
            <strong> de que todos somos uno, </strong>
            hay conexión
             <hr />
        </div>
        <div> 
        <p className="parrafo"> Desde la solidaridad y la empatía, nos unimos como familia multilatina para contribuir a mitigar los impactos de la COVID-19 en América Latina. Este es el resultado de un trabajo comprometido, corresponsable y decidido de una alianza entre universidad-empresa-Estado.</p>
        </div>
    
        </article>
        <article className="mapaHome">
            <Link to={`${process.env.PUBLIC_URL}/brasil`} className="brasilMapaHome">
                <div className="puntoPais"> </div>
                <div className="dashed"></div>
                <div className="tituloDerecha">Brasil</div>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/colombia`} className="colombiaMapaHome">
                <div className="tituloIzquierda">Colombia</div>
                <div className="dashed"></div>
                <div className="puntoPais"> </div>               
             </Link>
            <Link to={`${process.env.PUBLIC_URL}/peru`} className="peruMapaHome">
                <div className="tituloIzquierda">Perú</div>
                <div className="dashed"></div>
                <div className="puntoPais"> </div> 
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/chile`} className="chileMapaHome" >
                <div className="tituloIzquierda">Chile</div>
                <div className="dashed"></div>
                <div className="puntoPais"> </div>
            </Link>
        </article>

    </section>
    );
    
export default Home; 
