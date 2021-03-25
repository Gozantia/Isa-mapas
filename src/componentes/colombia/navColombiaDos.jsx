import React from 'react'
import { Link } from "react-router-dom";

function navColombiaDos() {
    return (
        <nav className="navSideBarBottom">
            <ul className=" navBottom"> 

            <Link to="/colombia/amazonas">
                <li>
                 Amazonas
                </li>
                </Link>

            <Link to="/colombia/antioquia">
                <li>
                    Antioquia
                </li>
            </Link>
            <Link to="/colombia/atlantico">
                <li>
                    Atlántico
                </li>
                </Link>
                <Link to="/colombia/boyaca">
                <li>
                    Boyacá
                </li>
                </Link>   
                <Link to="/colombia/bolivar">
                <li>
                    Bolivar
                </li>
                </Link>   
                <Link to="/colombia/cesar">
                <li>
                    Cesar
                </li>
                </Link>

                <Link to="/colombia/choco">
                <li>
                    Chocó
                </li>
                </Link>

                <Link to="/colombia/cordoba">
                <li>
                    Córdoba
                </li>
                </Link>
     
 
                <Link to="/colombia/cundinamarca">
                <li>
                    Cundinamarca
                </li>
                </Link>
                <Link to="/colombia/meta">
                <li>
                    Meta
                </li>
                </Link>
                <Link to="/colombia/narino">
                <li>
                    Nariño
                </li>
                </Link>

                <Link to="/colombia/san-andres">
                <li>
                    San Andrés
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default navColombiaDos
