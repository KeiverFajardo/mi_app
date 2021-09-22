import { useState, useEffect } from 'react';
import { promesa } from '../../utils/Mock';
import { useParams } from "react-router-dom";

import ItemList from '../itemList/itemList';

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

console.log(promesa)

function ItemListContainer ({saludo}) {
    const [productos , setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    const añadir = (cant) => {
        console.log(cant)
    }

   useEffect(() =>{

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

   }, [idCategoria])

   console.log(idCategoria);
    return (
        <div>
            <h1>{saludo}</h1>

            {
                loading ? <h2>Cargando ...</h2> :  <ItemList productos={productos} />
            }

           

        </div>
    )
}

export default ItemListContainer