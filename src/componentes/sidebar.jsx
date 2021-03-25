
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
              case '/peru':
                setShowSide(<Peru/>);
                break;
                case '/brasil':
                setShowSide(<Brasil/>);
                break;
              case '/chile':
                setShowSide(<Chile/>);
                break;

              case '/colombia':
                setShowSide(<Colombia/>);
                break;
              case '/colombia/san-andres':
                    setShowSide(<ContenidoUno/>);
                  break;
              case '/colombia/atlantico':
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case '/colombia/boyaca':
                    setShowSide(<ContenidoDos/>);
                  break;
                  case '/colombia/choco':
                    setShowSide(<ContenidoDos/>);
                  break;
                  case '/colombia/cordoba':
                    setShowSide(<ContenidoDos/>);
                  break;
                  case '/colombia/bolivar':
                    setShowSide(<ContenidoDos/>);
                  break;
                  case '/colombia/meta':
                    setShowSide(<ContenidoUno/>);
                  break;
                  case '/colombia/cundinamarca':
                    setShowSide(<ContenidoTres/>);
                  break;
                  case '/colombia/antioquia':
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case '/colombia/cesar':
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case '/colombia/narino':
                    setShowSide(<ContenidoUnoyDos/>);
                  break;
                  case '/colombia/amazonas':
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