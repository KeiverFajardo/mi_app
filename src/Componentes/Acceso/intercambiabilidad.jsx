import { useState } from "react";

const InputCount= ()=>{
    return <button className="btn btn-outline-primary" onclick={()=>console.log('carrito')}>Ir al cart o terminar compra</button>
}

const ButtonCount= (handleInter)=>{
    return <button className="btn btn-outline-success" onclick={handleInter}>Agregar al carrito</button>
}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div >
            <h2>Item Description</h2>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter}/>
                :
                    <InputCount />
            }
            {/*<Count onConfirm={addToCart} maxQuantify={itemMax} />*/}
        </div>
    )
}

export default Intercambiabilidad;