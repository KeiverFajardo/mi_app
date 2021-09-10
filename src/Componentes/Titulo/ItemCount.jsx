import {useState} from 'react'


const ItemCount = ({stock, inicial, añadir}) => {
    const [count, setCount] = useState(inicial)

    function sumar(){
        if (count < stock){
            setCount(count + 1)
        }
    }

    function restar(){
        if (count>1) {
            setCount(count - 1)
        }
    }

    const agregarCarro = () => {
        añadir(count)
    }

    return(
        <div>
            <h3>soy item Count</h3>
            <label>{count}</label><br/>
            <button onClick={sumar}>+</button>
            <button onClick={agregarCarro}>Agregar al Carrito</button>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount;