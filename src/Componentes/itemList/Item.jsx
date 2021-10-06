import React from "react";
import {Link} from "react-router-dom";



const Item = ({producto}) => {
    return (
        <div key={producto.id} className='card w-25 mt-5'>
            <div className='card-header'>{producto.nombre}</div>
            <div className="card-body">
                <img src={producto.foto} alt='foto' className='w-30' />
                
            </div>
            <div className="card-footer">
                <h3 className="card-text">Descripcion: {producto.descripcion}</h3> 
                <hr />
                <h4>Cantidad disponible: {producto.stock}</h4>
                <hr />
                <Link to={`/item/${producto.id}`}>
                    <button className="btn btn-outline-primary btn-block">Ver detalle del producto</button>
                </Link>
            </div>
        </div>
    )
}

export default Item