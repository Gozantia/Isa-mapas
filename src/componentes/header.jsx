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
        <Link to="/"><img src={Logo} alt="ISA"/></Link>
        </div>
        </header>
    <Slogan/>
    </>
    )

}
export default Header