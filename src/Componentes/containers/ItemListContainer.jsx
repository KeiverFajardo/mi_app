import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemList from '../itemList/itemList';
import '../styles/styles.css'
import { getFirestore } from '../../services/getFirebase';

function ItemListContainer ({saludo}) {
    const [productos , setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    
   useEffect(() =>{

    if (idCategoria) {
        const dbQuery = getFirestore()
        dbQuery.collection('items').where('categoria', '==', idCategoria).get()
        .then(resp => {
            setProductos( resp.docs.map(producto => ( {id: producto.id, ...producto.data() } )))
        })
        .catch(err => alert('el producto no existe' + err)
            
            //console.log(err)
            )
        .finally(() => setLoading(false))
    }
    else {
        const dbQuery = getFirestore()
        dbQuery.collection('items').get()
        .then(resp => {
            setProductos( resp.docs.map(producto => ( {id: producto.id, ...producto.data() } )))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

   }, [idCategoria])
  // console.log(productos)
   
    return (
        <>
           
                {
                    loading ? <h2>Cargando contenido...</h2> :  <ItemList productos={productos} />
                }
           
        </>
    )
}

export default ItemListContainer