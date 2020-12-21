import React, { PureComponent } from 'react'
import '../estilos/colombia.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SanAndres from './sanAndres';
class ColombiaMapa extends PureComponent {


    render() {
        return (
            <Router>
            <Switch>
               <Route path="/sanAndres" exact component={SanAndres} />
               <Route path="/colombia" exact component={Colombia} />
            </Switch>
             </Router>
        )
    }
}

const Colombia = () => (
    <section className="colombiaSection">
    <Link to="/sanAndres" className="SanAndresMapa">
            <div className="tituloIzquierda">San Andrés</div>
            <div className="dashed"></div>
            <div className="puntoPais"> </div>

    </Link>
    </section>
)
export default ColombiaMapa
