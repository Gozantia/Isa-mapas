import React from 'react';
import { Link } from "react-router-dom";


function NavPaises() {
    return (
        <nav className="navSideBar">
            <ul>
                <li>
                    Colombia
                </li>
                <li>
                    Brasil
                </li>
                <li>
                    Perú
                </li>
                <li> <Link to="/chile">
                    Chile 
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavPaises
