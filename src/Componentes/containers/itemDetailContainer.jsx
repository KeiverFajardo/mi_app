import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    

        useEffect(() => {
           if (id) {
                const dbQuery = getFirestore()
                dbQuery.collection('items').doc(id).get()
                .then(resp => {
                   // console.log(resp)
                    setItem({id: resp.id, ...resp.data() } )
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            }
            else {
                const dbQuery = getFirestore()
                dbQuery.collection('items').get()
                .then(resp => {
                    console.log(resp)
                    setItem(resp.docs.map(producto => ({id: resp.id, ...resp.data() })) )
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            }}, [])
        
    //    console.log(item)
      console.log(loading)
        return (
            <>
                {   item && <ItemDetail key={ item.id } item={ item }/> }
            </>
        )
}



export default ItemDetailContainer