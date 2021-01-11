import React from 'react';
import Logo from './imagenes/logo.png';
import './estilos/header.css';
import { Link } from "react-router-dom";
import Slogan from "../componentes/slogan";


function Header() {
    return (
        <>
        <header>
        <div className="logo">
        <Link to="/"><img src={Logo} alt="ISA"/></Link></div>
            
             <nav>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about/"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
                {/* <li><Link to="/colombia">Colombia</Link></li>
                <li><a href="#Perú">Perú</a></li>
                <li><a href="#Brasil"> Brasil</a></li> 
                <li><a href="#Chile"> Chile</a></li>
                <li><a href="#Aliados">Aliados</a></li> */}
            </ul>
        </nav>
    </header>
    <Slogan/>
    </>
    )

}
export default Header