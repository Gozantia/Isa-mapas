import React, {useState} from 'react'
import {useLocation} from "react-router-dom";

function SanAndres() {
    const location = useLocation();
    const actualLocation = location.pathname

    function sideBaryeah() {
        return (actualLocation)
    }

    const [showSide, setShowSide]= useState (sideBaryeah())

    function cambioTexto() {
        setShowSide('Este es el texto Nuevo que me inventé')
    }
    return (<div >
            <section className="sanAndresSection">
                    <div className="hashtag" >
                        {showSide}
                        
                    </div>
                    <button onClick={cambioTexto} style={{margin: '97px'}}>Cambio</button>

            </section>
        </div>
    )
}

export default SanAndres
