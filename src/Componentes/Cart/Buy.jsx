import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../services/getFirebase";

const Buy = (props) => {

    const [compra , setCompra] = useState([])
    const idCompra = props.orden
    const [loading, setLoading] = useState(true)
    const {carList, precioTotal} = useCartContext()

    useEffect(() => {

        if (idCompra) {
            const dbQuery = getFirestore()
            dbQuery.collection('orders').where('items.id', '==', idCompra).get()
            .then(resp => {
                setCompra( resp.docs.map(producto => ( {id: producto.id, ...producto.data() } )))
            }).catch(err => alert('el producto no existe' + err)
                
            //console.log(err)
            )
            .finally(() => setLoading(false))
        }
    }, [idCompra])
 
    return (

        <>

            {
            loading ?

            <h2>Cargando contenido...</h2> :

            
            
            carList.map(item => 
                        <div className="card product-card w-100 col-4" key={item.id}>
                            <li> {item.item.nombre}  - {item.item.descripcion}- $ {item.item.precio}  - {item.cant} und - Total: $ {(item.item.precio * item.cant)}</li>
                            
                        </div> 
                    )}

        </>
        
    )
}

export default Buy