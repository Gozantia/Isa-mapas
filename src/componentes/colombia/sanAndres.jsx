import React, {useRef} from 'react'
function SanAndres() {
        const childRef = useRef();
    return (<div style={{display: 'flex'}}>
            <section className="sanAndresSection">
                    <div>
                    <button onClick={() => { childRef.current.showAlert() }}>
                                 Call Function
                        </button>
                        <h3>Holaa gonorreas</h3>
                    </div>
            </section>
        </div>
    )
}

export default SanAndres
