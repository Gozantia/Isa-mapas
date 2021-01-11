import React, { useState} from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Switch , withRouter } from "react-router-dom";
import Home from "./componentes/home";
import About from "./componentes/about";
import Contact from "./componentes/contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./componentes/header";
import Colombia from "./componentes/colombia/colombiaIndex"  
import Sidebar from "./componentes/sidebar"
  

export default function App() {
    const [showSide, setShowSide]= useState (false)
    
    const mostrarSideBar = () => {  
      setShowSide(!showSide)
  }

    const tiempo = { enter: 3800, exit: 400 };    
    const ContentContainer = withRouter(({ location }) => (
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={tiempo}>
      <main>
      <Switch location={location}>
      
        <Route path="/" exact 
            component={() => <Home mostrarSideBar={mostrarSideBar} />} />
            <Route path="/about/"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/colombia" component={() => <Colombia mostrarSideBar={mostrarSideBar} key={showSide} /> } />
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
       <Sidebar show={showSide} mostrarSideBar={mostrarSideBar} />
          <div className="contenido">
          <Header/>
          <ContentContainer />
          </div>
      </div>
    </Router>
   
    );
  }