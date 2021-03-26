import React from 'react';
import { Link } from "react-router-dom";


function NavPaises() {
    return (
        <nav className="navSideBar">
            <ul> <Link to={`${process.env.PUBLIC_URL}/colombia`}>
                <li>
                    Colombia
                </li>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/brasil`}>
                <li>
                    Brasil
                </li>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/peru`}>
                <li>
                    Perú
                </li>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/chile`}> <li> 
                    Chile 
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavPaises
