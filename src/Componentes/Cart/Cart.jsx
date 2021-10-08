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
                    <div className="row">
                        <h3>No hay productos en el carrito.</h3>
                        <Link to={'/'} className="btn btn-outline-info w-250">
                            Seguir comprando.
                        </Link>
                    </div>
                    
                :
                    carList.map(item => 
                                            <div className="card product-card" key={item.id}>
                                                <div className="card w-90 mt-6">
                                                    <div className="col-6">
                                                        <img src={item.item.foto} alt="" className='w-30'/>
                                                    </div>
                                                    <div className="row">
                                                        <h3>{item.item.nombre}</h3>
                                                        <span>Categoria: {item.item.categoria}</span> 
                                                        <p>Descripcion: {item.item.descripcion}</p> 
                                                        <p>Precio: ${item.item.precio}</p> 
                                                        <p>Cantidad: {item.cant}</p> 
                                                    </div>
                    
                                                </div>    
                                      
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