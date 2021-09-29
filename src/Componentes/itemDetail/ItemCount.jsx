import {useState} from 'react'


const ItemCount = ({stock, inicial, añadir, cambiarBoton}) => {
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

    const agregarCarrito=()=>{
        añadir(count)
        cambiarBoton(false)
    }

    return(
        <div>
            
            <div>
                
                <button onClick={sumar} className="btn btn-outline-success w-250">+</button>
                <label>{count}</label>
                <button onClick={restar} className="btn btn-outline-success w-250">-</button><br/>
                <button onClick={agregarCarrito} className="btn btn-outline-success">Agregar al carrito</button>
            </div>
            
  
        </div>
    )
}

export default ItemCount;