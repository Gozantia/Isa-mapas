
import React, {useState, useEffect} from "react";
import {useLocation } from "react-router-dom";
import SanAndres from "./colombia/sanAndres/contenido";


function Sidebar() {
    const location = useLocation();

  const [showSide, setShowSide]= useState ('')

       useEffect(() => {


        setShowSide( () => {
            switch (location.pathname) {
                case '/colombia/san-andres':
                    setShowSide(<SanAndres/>);
                  break;
                  default:  
                    setShowSide('');
            }

        }


        );
      }, [location]);

  return (
      <>
      <section className="contenidoLado">
        <side>
          <ul>
            <li><a href="/Colombia" ></a></li>
            <li></li>
            <li></li>
          </ul>

        </side>
         {showSide}
     </section>
  
    </>
  );

    
}



export default Sidebar