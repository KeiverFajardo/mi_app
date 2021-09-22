import { useState, useEffect } from "react";
import { promesa } from "../../utils/Mock";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams();
    useEffect(() =>{
        promesa
        .then(resp => {
            if (id) {
                const itemFiltrado = resp.filter((item) => item.id === parseInt(id))
                setItem(itemFiltrado)
            } else {
                setItem(resp)
            }
        })
        .catch((err) => console.error(err))
        
    }, [id])
    
    console.log(item);
    return (
        <>
         {item && <ItemDetail key={item.id} item={item}/>}
        </>
    )
}

export default ItemDetailContainer