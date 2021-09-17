import { useState, useEffect } from "react";
import { promesaUnica } from "../../utils/Mock";
import ItemDetail from "../itemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() =>{
        promesaUnica
        .then(resp => setItem(resp))
        
    }, [])
    
    
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer