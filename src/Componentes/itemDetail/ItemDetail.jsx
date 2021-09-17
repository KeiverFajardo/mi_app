import React from "react";
import imagenes from "../../img/imagenes";

const ItemDetail = ({item}) => {
    console.log(item)

    
    return (
        <>
            <div className="card w-25">
                <h2>{item.nombre}</h2>
                <h2>{item.id}</h2>
                <p>{item.descripcion}</p>
                <h2>{item.precio}</h2>
                <img src={imagenes.img1} alt="camara"/>
            </div>    
        </>
    )
}

export default ItemDetail