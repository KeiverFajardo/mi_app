import {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, inicial, añadir}) => {
    const [count, setCount] = useState(inicial)
    const [cambiarBotonsito, setCambiarBotonsito] = useState(true)

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

    const agregarCarrito=()=>{
        añadir(count)
        setCambiarBotonsito(false)
    }

    return(
        <div>
            <h3>soy item Count</h3>
            <label>{count}</label><br/>
            <button onClick={sumar}>+</button>
            { cambiarBotonsito ? 
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            : 
            <div>
                <Link to={'/cart'} >
                    <button >Terminar compra</button>
                </Link>
                <Link to={'/'} >
                    <button >seguir comprando</button>
                </Link>
            </div>
            }
            
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount;