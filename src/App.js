import React from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Switch , withRouter } from "react-router-dom";
import Home from "./componentes/home";
import About from "./componentes/about";
import Contact from "./componentes/contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./componentes/header";
import Colombia from "./componentes/colombia/colombiaMapa"

  export default function App() {
    const tiempo = { enter: 3800, exit: 400 };
    const AnimatedSwitch = withRouter(({ location }) => (
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={tiempo}>
      <main>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about/"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/colombia" component={Colombia} />
        <Route render={() => <h1>404: Página no encontrada</h1>} />
      </Switch>
      </main>
      </CSSTransition>
  </TransitionGroup>
    )
    );
    return (
      <div className="app">
     <Router>
      <Header/>
      <AnimatedSwitch />
  </Router>
  </div>
    );
  }