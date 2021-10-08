import React from "react";
import ItemCount  from '../itemDetail/ItemCount';
import { useState, useContext } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'




const ItemDetail = ({item}) => {
    const [cambiarBotonsito, setCambiarBotonsito] = useState(true)

    const {addToCart} = useCartContext()

    const añadir = (cant) => {
      console.log(cant);
      addToCart(item, cant)
    } 

    console.log(addToCart)
    console.log(item)

    return (
        <main>
            <div className="card product-card">
                <div className="card w-90 mt-6">
                    <div className="col-6">
                        <img src={item.foto} alt="" className='w-30'/>
                    </div>
                    <div className="row">
                        <h3>{item.nombre}</h3>
                        <span>Categoria: {item.categoria}</span> 
                        <p>Descripcion: {item.descripcion}</p> 
                        <p>Precio: ${item.precio}</p> 
                    </div>
                    
                </div>  

                    { cambiarBotonsito 
                    ? 
                    <ItemCount stock={5} inicial={1} añadir={añadir} cambiarBoton={setCambiarBotonsito}/>
                    :
                    <div>
                        <Link to={'/Cart'} >
                            <button className="btn btn-outline-success w-250">Terminar compra</button>
                        </Link>
                        <Link to={'/'} >
                            <button className="btn btn-outline-info w-250">Seguir comprando</button>
                        </Link>
                    </div>
                    }               
            </div> 
            
        </main>
    )
}

export default ItemDetail 