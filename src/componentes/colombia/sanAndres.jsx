import React, {useRef} from 'react'
import Sidebar from "./sidebar"

function SanAndres() {
        const childRef = useRef();
    return (<div>
        <Sidebar ref={childRef} width={300} height={"100vh"}>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
        </Sidebar>

            <section className="sanAndresSection">
                    <div>
                    <button onClick={() => { childRef.current.showAlert() }}>
                                 Call Function
                        </button>
                    </div>
            </section>
        </div>
    )
}

export default SanAndres
