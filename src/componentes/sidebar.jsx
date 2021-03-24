
import React, {useState, useEffect} from "react";
import {useLocation } from "react-router-dom";
import SanAndres from "./colombia/sanAndres/contenido";
import Colombia from "./colombia/colombiaSidebar"
import Chile from "./chileSidebar"

function Sidebar() {
    const location = useLocation();

  const [showSide, setShowSide]= useState ('')

       useEffect(() => {


        setShowSide( () => {
            switch (location.pathname) {
              
              case '/chile':
                setShowSide(<Chile/>);
                break;

              case '/colombia':
                setShowSide(<Colombia/>);
                break;
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
         {showSide}

  
    </>
  );

    
}



export default Sidebar