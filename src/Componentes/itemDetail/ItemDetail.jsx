import React from "react";
import imagenes from "../../img/imagenes";
import ItemCount  from '../Titulo/ItemCount';
import { useState } from "react";

const ItemDetail = ({item}) => {
     
    const [cantidad, setCantidad] = useState(0)


    const añadir = (cant) => {
      console.log(cant);
        setCantidad(cant)
      //alert(cant)
    }
    
    return (
        <>
            <div className="card w-25">
                <h2>{item.nombre}</h2>
                <h2>{item.id}</h2>
                <p>{item.descripcion}</p>
                <h2>{item.precio}</h2>
                <img src={imagenes.img1} alt="camara"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt similique architecto dolorum quibusdam unde aliquid quaerat, ut sint? Quos facilis deleniti a tempore quia eligendi laborum eaque, veritatis assumenda accusantium?

                </p>
                <ItemCount stock={5} inicial={1} añadir={añadir}/>
             
            </div>   
            
        </>
    )
}

export default ItemDetail