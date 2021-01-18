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
        <div className="tituloIzquierda">San Andrés</div>
        <div className="dashed"></div>
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
