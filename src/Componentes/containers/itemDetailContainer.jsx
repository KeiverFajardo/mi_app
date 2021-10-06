import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    

        useEffect(() => {
           if (id) {
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('id', '===', id).get()
            .then(resp => {
                console.log(resp.docs)
                setItem(resp.docs.map(producto => ( {id: producto.id, ...producto.data() } )))
            })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
/*
                    const itemFiltrado = resp.filter((item) => item.id === parseInt(id))
                    setItem(itemFiltrado)*/
                } 
    
        }, [id])
        
        console.log(item)
        return (
            <>
                {   item && <ItemDetail key={ item.id } item={ item }/> }
            </>
        )
}



export default ItemDetailContainer