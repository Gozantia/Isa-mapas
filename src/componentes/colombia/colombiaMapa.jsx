import React from 'react'
import { Switch, Route, useRouteMatch, Link} from "react-router-dom";
import '../estilos/colombia.css';
import Topic from './topic'


function Colombia() {
    let { path, url } = useRouteMatch();

    
    return (
       
       <>
    
        <Switch>
        <Route exact path={path}>
        <section className="colombiaSection">
        <Link  to={`${url}/san-andres`} className="SanAndresMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/atlantico`} className="atlanticoMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/antioquia`} className="antioquiaMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/amazonas`} className="amazonasMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/meta`} className="metaMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/narino`} className="narinoMapa">
        <div className="puntoPais"> </div>
        </Link>
        <Link  to={`${url}/choco`} className="chocoMapa">
        <div className="puntoPais"> </div>
        </Link>
        
        <Link  to={`${url}/boyaca`} className="boyacaMapa">
        <div className="puntoPais"> </div>
        </Link>
        
        <Link  to={`${url}/cordoba`} className="cordobaMapa">
        <div className="puntoPais"> </div>
        </Link>
        
        <Link  to={`${url}/bolivar`} className="bolivarMapa">
        <div className="puntoPais"> </div>
        </Link>
        
        <Link  to={`${url}/cundinamarca`} className="cundinamarcaMapa">
        <div className="puntoPais"> </div>
        </Link>
        
        <Link  to={`${url}/cesar`} className="cesarMapa">
        <div className="puntoPais"> </div>
        </Link>
        </section>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>

        </>
    )
}

export default Colombia
