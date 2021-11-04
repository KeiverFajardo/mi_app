import React from "react";
import ItemCount  from '../itemDetail/ItemCount';
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'




const ItemDetail = ({item}) => {
    const [cambiarBotonsito, setCambiarBotonsito] = useState(true)

    const {addToCart} = useCartContext()

    const añadir = (cant) => {

      addToCart(item, cant)
    } 


    let aux= undefined
    aux = (item.hasOwnProperty("stock"))
 
    
    return (
        <main>
            {
            aux 
                ?
                    
                <div className="card product-card w-80 mb-50 detail">
                    <div className="card w-80 mb-50 detail">
                        <div className="col-6">
                            <img src={item.foto} alt="" className='w-30'/>
                        </div>
                        <div className="col-12">
                            <h3 className="large">{item.nombre}</h3>
                            <span>CATEGORIA: {item.categoria}</span> 
                            <p>{item.descripcion}</p> 
                            <p>Precio: ${item.precio}</p> 
                        </div>
                    
                    </div>  

                        { cambiarBotonsito 
                        ? 
                        <ItemCount stock={50} inicial={1} añadir={añadir} cambiarBoton={setCambiarBotonsito}/>
                        :
                        <div className="terminarSeguir">
                            <Link to={'/Cart'} >
                                <button className="btn btn-outline-success w-250">Terminar compra</button>
                            </Link>
                            <Link to={'/'} >
                                <button className="btn btn-outline-info w-250">Seguir comprando</button>
                            </Link>
                        </div>
                        }               
                </div> 
                :
                <div>
                    <div>El producto buscado por el id no existe</div>
                    <Link to={'/'} >
                                <button className="btn btn-outline-info w-250">Ir a menú principal</button>
                    </Link>
                </div>

            }
        </main>
    )
}

export default ItemDetail 