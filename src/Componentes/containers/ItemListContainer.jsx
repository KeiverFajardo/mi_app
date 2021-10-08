import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemList from '../itemList/itemList';
import '../styles/styles.css'
import { getFirestore } from '../../services/getFirebase';
/*
const getFech = new Promise((res, rej) => {

    //acciones asincronicas
    let respuesta = '200'
    if (respuesta === '200'){
        res(personas)
    }else{
        rej('404')
    }

    //res('ok 200')
    //console.log('tarea')
})*/


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
        .catch(err => console.log(err))
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

    
    /*
    filtrar por una condicion en este caso por precio
     const dbQuery = getFirestore()
        dbQuery.collection('items').where('precio', '>', 50).get()
        .then(resp => {
            setProductos( resp.docs.map(producto => ( {id: producto.id, ...producto.data() } )))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        */
/*
        if(idCategoria) {
            promesa
            .then(respuesta => {
                setProductos(respuesta.filter(prod => prod.categoria === idCategoria))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false)) 
        }else{
            promesa
            .then(respuesta => {
                setProductos(respuesta)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false)) 
        }
*/
   }, [idCategoria])
  // console.log(productos)
   
    return (
        <>
            <div className="row">
                <h1>{saludo}</h1>
            </div>
            <div>
                {
                    loading ? <h2>Cargando contenido...</h2> :  <ItemList productos={productos} />
                }
            </div>
        </>
    )
}

export default ItemListContainer