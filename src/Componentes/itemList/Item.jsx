import React from "react";
import {Link} from "react-router-dom";



const Item = ({producto}) => {
    
    return (
        <> 
            <div className="card product-card w-33 col-4 mt-4 ">
                <div className="card w-100">
            
                    <div className='card-header'> <h3> {producto.nombre} </h3></div>
                    <div className="card-body">
                        <img src={producto.foto} alt='' className='w-30' />
                        
                    </div>
                    <div className="card-footer row">
                        <h5 className="card-text">{producto.descripcion}</h5> <br />
                    
                        <p>Cantidad disponible: {producto.stock}</p>
                    
                        <Link to={`/item/${producto.id}`}>
                            <button className="btn btn-outline-primary btn-block">Ver detalle del producto</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item