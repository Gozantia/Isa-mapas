import React from 'react'
import { Link } from "react-router-dom";

function navColombia() {
    return (
        <nav className="navSideBar navSideBarLarga">
            <ul className=" navLarga"> 

            <Link to={`${process.env.PUBLIC_URL}/colombia/amazonas`}>
                <li>
                 Amazonas
                </li>
                </Link>

            <Link to={`${process.env.PUBLIC_URL}/colombia/antioquia`}>
                <li>
                    Antioquia
                </li>
            </Link>
            <Link to={ `${process.env.PUBLIC_URL}/colombia/atlantico`}>
                <li>
                    Atlántico
                </li>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/colombia/boyaca`}>
                <li>
                    Boyacá
                </li>
                </Link>   
                <Link to={`${process.env.PUBLIC_URL}/colombia/bolivar`}>
                <li>
                    Bolivar
                </li>
                </Link>   
                <Link to={`${process.env.PUBLIC_URL}/colombia/cesar`}>
                <li>
                    Cesar
                </li>
                </Link>

                <Link to={`${process.env.PUBLIC_URL}/colombia/choco`}>
                <li>
                    Chocó
                </li>
                </Link>

                <Link to={`${process.env.PUBLIC_URL}/colombia/cordoba`}>
                <li>
                    Córdoba
                </li>
                </Link>
     
 
                <Link to={`${process.env.PUBLIC_URL}/colombia/cundinamarca`}>
                <li>
                    Cundinamarca
                </li>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/colombia/antioquia`}>
                <li>
                    Meta
                </li>
                </Link>
                <Link to={ `${process.env.PUBLIC_URL}/colombia/narino`}>
                <li>
                    Nariño
                </li>
                </Link>

                <Link to={`${process.env.PUBLIC_URL}/colombia/san-andres`}>
                <li>
                    San Andrés
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default navColombia
