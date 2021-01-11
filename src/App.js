import React from "react";
import "./index.css"
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./componentes/header";
import Enrutador from "./componentes/enrutador"
import Sidebar from "./componentes/sidebar"

export default function App() {

    return (
      
     <Router>
       <div className="app">
       <Sidebar/>
          <div className="contenido">
          <Header/>
          <Enrutador />
          </div>
      </div>
    </Router>
   
    );
  }