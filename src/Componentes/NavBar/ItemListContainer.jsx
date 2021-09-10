import React from 'react';
import ItemCount from '../Titulo/ItemCount';


const ItemListContainer = ({saludo, añadir}) => {
    
   

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemCount stock={5} inicial={1} añadir={añadir} />

        </div>
    )
}

export default ItemListContainer