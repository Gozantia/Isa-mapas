import React from 'react'
import '../estilos/colombia.css';
import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import Colombia from './colombiaMapa';
import Topic from './topic'

function ColombiaMapa({mostrarSideBar}) {
        let { path, url } = useParams();
        return (
            
            <Router>
            <Switch>
               <Route exact path={path} component={() => <Colombia mostrarSideBar={mostrarSideBar}/> } />
               <Route path={`${url}/:topicId`} exact component= {<Topic/>} />
            </Switch>
             </Router>
        )
    
}

export default ColombiaMapa
