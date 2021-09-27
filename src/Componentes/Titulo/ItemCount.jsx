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
            { cambiarBotonsito 
            ? 
            <div>
                <h3>soy item Count</h3>
                <button onClick={sumar}>+</button>
                <label>{count}</label>
                <button onClick={restar}>-</button><br/>
                <button onClick={agregarCarrito} className="btn btn-outline-success">Agregar al carrito</button>
            </div>
            : 
            <div>
                <Link to={'/cart'} >
                    <button className="btn btn-outline-success w-250">Terminar compra</button>
                </Link>
                <Link to={'/'} >
                    <button className="btn btn-outline-info w-250">Seguir comprando</button>
                </Link>
            </div>
            }
  
        </div>
    )
}

export default ItemCount;