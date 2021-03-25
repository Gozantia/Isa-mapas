import React from 'react'
import { Route, Switch , withRouter} from "react-router-dom";
import Home from "../componentes/home";
import Colombia from "../componentes/colombia/colombiaMapa";
import Noticia1 from "../componentes/colombia/contenidoUnoTexto";
import Noticia2 from "../componentes/colombia/contenidoDosTexto";
import Noticia3 from "../componentes/colombia/contenidoTresTexto";
import Chile from "../componentes/chileMapa" ;
import Peru from "../componentes/peruMapa";
import Brasil from "../componentes/brasilMapa";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Enrutador = withRouter(({ location }) => (
    <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
    <main>
    <Switch location={location}>
    
      <Route  path={`${process.env.PUBLIC_URL}/`}  exact component={() => <Home />} />
      <Route path={`${process.env.PUBLIC_URL}/colombia.html`}  component={() => <Colombia /> } />
      <Route path={`${process.env.PUBLIC_URL}/chile.html`} component={() => <Chile /> } />
      <Route  path={`${process.env.PUBLIC_URL}/peru.html`} component={() => <Peru /> } />
      <Route path={`${process.env.PUBLIC_URL}/brasil.html`} component={() => <Brasil /> } />
      <Route path={`${process.env.PUBLIC_URL}/proyectos-one-health`} component={() => <Noticia1 /> } />
      <Route path={`${process.env.PUBLIC_URL}/plasma-convaleciente-covid-19`}component={() => <Noticia3 /> } />
      <Route render={() => <h1>404: Página no encontrada</h1>} />
     
    </Switch>
    </main>
    </CSSTransition>
</TransitionGroup>
  )
  );

  export default Enrutador
