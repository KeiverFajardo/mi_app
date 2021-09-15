import { useState, useEffect } from 'react';
import { promesa } from '../../utils/Mock';

import ItemCount from '../Titulo/ItemCount';
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

    const añadir = (cant) => {
        console.log(cant)
    }

   useEffect(() =>{
       promesa
       .then(respuesta => {
           setProductos(respuesta)
       })
       .catch(error => console.log(error))
       .finally(() => setLoading(false))
   }, [])

    return (
        <div>
            <h1>{saludo}</h1>

            {
                loading ? <h2>Cargando ...</h2> :  <ItemList productos={productos} />
            }

            <ItemCount stock={5} inicial={1} añadir={añadir} />

        </div>
    )
}

export default ItemListContainer