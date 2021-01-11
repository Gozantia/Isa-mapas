import React from 'react'
import '../estilos/colombia.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SanAndres from './sanAndres';
import Colombia from './colombiaMapa';

function ColombiaMapa({mostrarSideBar}) {
    
        return (
            
            <Router>
            <Switch>
               <Route path={`/colombia/sanAndres`} exact component={SanAndres} />
               <Route path={`/colombia/`} exact component={() => <Colombia mostrarSideBar={mostrarSideBar}/> } />
            </Switch>
             </Router>
        )
    
}

export default ColombiaMapa
