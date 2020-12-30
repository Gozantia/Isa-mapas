import React, { useState} from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Switch , withRouter } from "react-router-dom";
import Home from "./componentes/home";
import About from "./componentes/about";
import Contact from "./componentes/contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./componentes/header";
import Colombia from "./componentes/colombia/colombiaMapa"  
import Navbar from "./componentes/navbar"

  export default function App() {
    const [showNav, setShowNav]= useState (false)

    // const mostrarSideBar = useCallback(
    //   event => {
    //     event.preventDefault();
    //     setShowNav(!showNav)
    //   },
    //   [showNav]
    // );
    
    const mostrarSideBar = () => {  
      setShowNav(!showNav)
  }


    const tiempo = { enter: 3800, exit: 400 };    
    const AnimatedSwitch = withRouter(({ location }) => (
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={tiempo}>
      <main>
      <Switch location={location}>
      
        <Route path="/" exact 
            component={() => <Home mostrarSideBar={mostrarSideBar} />} />
            <Route path="/about/"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/colombia" component={() => <Colombia mostrarSideBar={mostrarSideBar} key={showNav} /> } />
        <Route render={() => <h1>404: Página no encontrada</h1>} />
      </Switch>
      </main>
      </CSSTransition>
  </TransitionGroup>
    )
    );

    return (
      
     <Router>
       
       <div className="app">
       {/* <div className="sidebar">
         <h3>Trompas</h3>
       </div> */}
        <Navbar show={showNav} mostrarSideBar={mostrarSideBar} />
       <div className="contenido">
       <div className="hashtag">
            <div className="naranjaCursiva">#</div> 
            CUIDÁNDOTE
            <div className="naranjaCursiva">NOSCUIDAMOS</div>
        </div>
      <Header/>
      <AnimatedSwitch />
      </div>
      </div>
    </Router>
   
    );
  }