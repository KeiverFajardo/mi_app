import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'


const Cart = () => {
    
    const {carList, deleteItemCart} = useCartContext()
    console.log(carList)

    return (
        <div>
            <center>
                { carList.length === 0 
                ?  
                    <div>
                        <h3>No hay productos en el carrito.</h3>
                        <Link to={'/'} className="btn btn-outline-info w-250">
                            Seguir comprando.
                        </Link>
                    </div>
                    
                :
                    carList.map(item => 
                                            <div key={item.id}>
                                                <h2>{item.item.nombre}</h2>
                                                <h3>{item.item.categoria}</h3>
                                                
                                                <button className="btn btn-outline-danger w-250" onClick={() => deleteItemCart(item)}>Eliminar</button>
                                                <hr />
                                            </div> 
                                )
                }
                  
                
            </center>     
        </div>
    );

}

export default Cart;