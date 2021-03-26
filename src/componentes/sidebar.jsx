
import React, {useState, useEffect} from "react";
import {useLocation } from "react-router-dom";
import ContenidoUno from "./colombia/contenidoUno";
import ContenidoDos from "./colombia/contenidoDos";
import ContenidoTres from "./colombia/contenidoTres";
import ContenidoUnoyDos from "./colombia/contenidoUnoyDos";
import Colombia from "./colombia/colombiaSidebar"
import Chile from "./chileSidebar"
import Peru from "./peruSidebar"
import Brasil from "./brasilSidebar"

function Sidebar() {
    const location = useLocation();

  const [showSide, setShowSide]= useState ('')

       useEffect(() => {


        setShowSide( () => {
            switch (location.pathname) {
              case `${process.env.PUBLIC_URL}/peru`:
                setShowSide(<Peru/>);
                break;
                case `${process.env.PUBLIC_URL}/brasil`:
                setShowSide(<Brasil/>);
                break;
              case `${process.env.PUBLIC_URL}/chile`:
                setShowSide(<Chile/>);
                break;

              case `${process.env.PUBLIC_URL}/colombia`:
                setShowSide(<Colombia/>);
                break;
              case `${process.env.PUBLIC_URL}/colombia/san-andres`:
                    setShowSide(<ContenidoUno/>);
                  break;
              case `${process.env.PUBLIC_URL}/colombia/atlantico`:
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/boyaca`:
                    setShowSide(<ContenidoDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/choco`:
                    setShowSide(<ContenidoDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/cordoba`:
                    setShowSide(<ContenidoDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/bolivar`:
                    setShowSide(<ContenidoDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/meta`:
                    setShowSide(<ContenidoUno/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/cundinamarca`:
                    setShowSide(<ContenidoTres/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/antioquia`:
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/cesar`:
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/narino`:
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case `${process.env.PUBLIC_URL}/colombia/amazonas`:
                    setShowSide(<ContenidoUnoyDos/>);
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