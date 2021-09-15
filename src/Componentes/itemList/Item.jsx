import React from "react";

const Item = ({producto}) => {
    return (
        <div key={producto.id} className='card w-50 mt-3'>
            <div className='card-header'>{producto.nombre}</div>
            <div className="card-body">
                <img src={producto.foto} alt='foto' />
                <p>Precio: {producto.precio}</p>
                <p>Color: {producto.color}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">Ver detalle del producto</button>

            </div>
        </div>

    )
}

export default Item