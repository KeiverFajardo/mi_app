import React from "react";
import hola from './laptopAsus.jpg';
import ItemCount  from '../itemDetail/ItemCount';
import { useState, useContext } from "react";
import { contextApp } from "../../App";
import { useCartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'




const ItemDetail = ({item}) => {
     
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    const [cambiarBotonsito, setCambiarBotonsito] = useState(true)

    

    const {addToCart} = useCartContext()
    const {state} = useContext(contextApp)

    const añadir = (cant) => {
      console.log(cant);
        setCantidadSeleccionada(cant)
      //alert(cant)
      addToCart({item: item, cantidad: cant})
    } 

    console.log(addToCart)

    return (
        <>
            
            <div className="card w-25 mt-5">
                <h2>{item.nombre}</h2>
                <h2>{item.id}</h2>
                <p>{item.descripcion}</p>
                <h2>{item.precio}</h2>
                <img src={hola} alt="camara" className='w-30'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt similique architecto dolorum quibusdam unde aliquid quaerat, ut sint? Quos facilis deleniti a tempore quia eligendi laborum eaque, veritatis assumenda accusantium?

                </p>

            </div>  

                { cambiarBotonsito 
                ? 
                <ItemCount stock={5} inicial={1} añadir={añadir} cambiarBoton={setCambiarBotonsito}/>
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
              
            
        </>
    )
}

export default ItemDetail