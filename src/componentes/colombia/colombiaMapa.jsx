import React, {useState} from 'react'
import '../estilos/colombia.css';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import SanAndres from './sanAndres';

function ColombiaMapa({mostrarSideBar}) {
        const [showNav, setShowNav]= useState (true)
    
        return (
            
            <Router>
            <Switch> 
               <Route path={`/colombia/sanAndres`} exact component={SanAndres} />
            </Switch>
            <section className="colombiaSection">
        <Link to={`/colombia/sanAndres`} className="SanAndresMapa" onClick={ mostrarSideBar }>
        <div className="tituloIzquierda">San Andrés</div>
        <div className="dashed"></div>
        <div className="puntoPais"> </div>
        </Link>
        </section>

             </Router>

        )
    
}

export default ColombiaMapa
