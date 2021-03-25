import React from 'react'
import { Route, Switch , withRouter} from "react-router-dom";
import Home from "../componentes/home";
import Colombia from "../componentes/colombia/colombiaMapa";
import Noticia1 from "../componentes/colombia/contenidoUnoTexto";
import Chile from "../componentes/chileMapa" ;
import Peru from "../componentes/peruMapa";
import Brasil from "../componentes/brasilMapa";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Enrutador = withRouter(({ location }) => (
    <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
    <main>
    <Switch location={location}>
    
      <Route path="/" exact component={() => <Home />} />
      <Route path="/colombia" component={() => <Colombia /> } />
      <Route path="/chile" component={() => <Chile /> } />
      <Route path="/peru" component={() => <Peru /> } />
      <Route path="/brasil" component={() => <Brasil /> } />
      <Route path="/proyectos-one-health" component={() => <Noticia1 /> } />
      <Route render={() => <h1>404: Página no encontrada</h1>} />
     
    </Switch>
    </main>
    </CSSTransition>
</TransitionGroup>
  )
  );

  export default Enrutador
