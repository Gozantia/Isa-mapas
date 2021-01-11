
import React, {useState, useEffect} from "react";
import {useLocation } from "react-router-dom";
import About from "./about";
import Contact from "./contact";

function Sidebar() {
    const location = useLocation();

  const [showSide, setShowSide]= useState ('')

       useEffect(() => {

        setShowSide( () => {
            switch (location.pathname) {
                case '/colombia-san-andres':
                    setShowSide(<About/>);
                  break;
                  case '/colombia':
                    setShowSide(<Contact/>);
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


// const Sidebar =() => {

//     history = useHistory()
// history.listen((location) => {
//     console.log(`The current URL is ${location.pathname}`)
// // Do stuff.
// })

    // const [showSide, setShowSide]= useState (sideBaryeah())
   
    // function sideBaryeah() {
    //     const colombia = '/colombia';
    //     if (actualLocation===colombia) {
    //       return 'Hola ';
    //     }
    //     return 'Chao';
    // }
    
}



export default Sidebar