import React from "react";
import {Link} from "react-router-dom";
import imagenes from "../../img/imagenes";

const Item = ({producto}) => {
    return (
        <div key={producto.id} className='card w-25 mt-3'>
            <div className='card-header'>{producto.nombre}</div>
            <div className="card-body">
                <img src={imagenes.img1} alt='foto' className='w-50' />
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda molestias placeat maxime ducimus autem quasi impedit soluta corporis laborum numquam pariatur veniam non culpa, voluptates facere cupiditate eum accusantium. Quaerat.</p>
            </div>
            <div className="card-footer">
                <Link to={`/item/${producto.id}`}>
                    <button className="btn btn-outline-primary btn-block">Ver detalle del producto</button>
                </Link>
            </div>
        </div>
    )
}

export default Item