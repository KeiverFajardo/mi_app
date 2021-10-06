import React from "react";
import hola from './laptopAsus.jpg';
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
        <div>
            
            <div className="card w-90 mt-6">
                <h2>{item.nombre}</h2>
                <h2>{item.id}</h2>
                <p>{item.descripcion}</p>
                <h2>{item.precio}</h2>
                <img src={item.foto} alt="camara" className='w-30'/>
            
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
    )
}

export default ItemDetail