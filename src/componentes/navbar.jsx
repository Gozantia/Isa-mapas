
import React from "react";
import {useLocation}  from "react-router-dom";

const Navbar =({mostrarSideBar, show}) => {
    // let match = useRouteMatch("/colombia/sanAndres");
  
//     const mostrarSA = (location) => {
//     location.pathname === "/colombia/sanAndres" ? "trompas" : "motas";
// }
return (

   <>

    <div className={show ? 'sidenav active': 'sidenav'}>
        Hello World      
    <button onClick={ mostrarSideBar }>  trompas  </button>
    <SanAndresside />
    </div>
   </>

)
}
const SanAndresside = () => {
    const location = useLocation();

const sanAndres = location.pathname === "/colombia/sanAndres";
return sanAndres && <h2>Hola gonorreas</h2>
}


export default Navbar