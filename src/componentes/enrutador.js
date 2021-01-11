import React from 'react'
import { Route, Switch , withRouter} from "react-router-dom";
import Home from "../componentes/home";
import About from "../componentes/about";
import Contact from "../componentes/contact";
import Colombia from "../componentes/colombia/colombiaMapa"  
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SanAndres from '../componentes/colombia/sanAndres';


const Enrutador = withRouter(({ location }) => (
    <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
    <main>
    <Switch location={location}>
    
      <Route path="/" exact 
          component={() => <Home />} />
      <Route path="/about/"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route path="/colombia" component={() => <Colombia /> } />
      <Route path="/colombia-san-andres" component={SanAndres} exact />
      <Route render={() => <h1>404: Página no encontrada</h1>} />
     
    </Switch>
    </main>
    </CSSTransition>
</TransitionGroup>
  )
  );

  export default Enrutador
