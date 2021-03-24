import React from 'react';
import { Link } from "react-router-dom";


function NavPaises() {
    return (
        <nav className="navSideBar">
            <ul> <Link to="/colombia">
                <li>
                    Colombia
                </li>
                </Link>
                <Link to="/brasil">
                <li>
                    Brasil
                </li>
                </Link>
                <Link to="/peru">
                <li>
                    Perú
                </li>
                </Link>
                <Link to="/chile"> <li> 
                    Chile 
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavPaises
