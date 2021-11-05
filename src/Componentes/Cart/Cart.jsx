
import { useState } from 'react';
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore'
import Buy from './Buy';

const Cart = () => {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        email2: ''
    })

    const [nOrden, setNOrden] = useState('')
   
    const [venta, setVenta] = useState(false)

    const {carList, deleteItemCart, precioTotal} = useCartContext()
    console.log(carList)
    let totals=0;
    let mensajes='';
    const sumars = (x) => {
        totals = totals + x
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = formData

        orden.total = precioTotal();
      
        orden.items = carList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.nombre;
            const price = cartItem.item.precio * cartItem.cant;

            return {id, title, price}
        })

        const db = getFirestore();
        const ordersCol = db.collection('orders');
    

        ordersCol.add(orden)
        .then((IdDocumento) => {
            console.log(IdDocumento.id);
            setNOrden(IdDocumento.id);
            setVenta(true)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {
            setFormData({
                name: '',
                tel: '',
                email: '',
                email2: ''

            })
      
            console.log('termino la promesa')
        })

      //actualiza todos los items que estan en el listado del cart del cartcontext
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', carList.map(i => i.item.id)
        )

        const batch = db.batch();

        itemsToUpdate.get()
        .then( collection=> {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - carList.find(item => item.item.id === docSnapshot.id).cant
                })
            })

            batch.commit().then(res => {
                console.log('resultado batch', res)
            })
        })
        console.log(orden)
        
    }
    

    function handleOnChange(e) {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        

    }
 

    let email1;
    let email2;
    return (
        <div>
            <center>
                { carList.length === 0 
                ?  
                    <div className="row">
                        <h3>No hay productos en el carrito.</h3>
                        <Link to={'/'} className="btn btn-outline-info w-250">
                            Seguir comprando.
                        </Link>
                    </div>
                    
                :
                    <div>

                        
                        {carList.map(item => 
                                                <div className="card product-card w-100 col-4" key={item.id}>
                                                    <li> {item.item.nombre}  - $ {item.item.precio}  - {item.cant} unidades - $ {(item.item.precio * item.cant)}</li>
                                                    {sumars(item.item.precio * item.cant)}
                                                    <button className="btn btn-outline-danger w-250" onClick={() => deleteItemCart(item)}>Eliminar</button>
                                                
                                                </div> 
                        )}
                
                        {
                            <div className="card product-card w-50 col-4">
                                <label>Monto total de la compra:{totals }</label>
                            </div>
                        }
                                    <form className="card col-12 formulario"
                                        
                                        onSubmit={handleOnSubmit}
                                        onChange={handleOnChange}
                                    >
                                        <div className="row">
                                            <p className="datos">Ingrese sus datos para culminar la compra</p>
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el nombre'
                                                name='name' 
                                                value={formData.name}
                                            />
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el numero de telefono'
                                                name='tel'
                                                value={formData.tel} 
                                            />
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el email'
                                                name='email'
                                                value={email1 = formData.email} 
                                            />
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Confirme el email'
                                                name='email2' 
                                                value={email2 = formData.email2}
                                            />
                            
                                            {((email1 === email2) && (email1 !== '')) ? 
                                <button className="btn btn-outline-success w-50 mt-2">Terminar compra</button>
                                
                                                                                        : <p></p>
                                            }
                                            
                                            
                                      
                                            
                                        </div>
                                    </form>

                                        {venta ? 
                                            <div>
                                                    <h3>Su numero de orden es: '{nOrden.toUpperCase()}' </h3>
                                                    <h4>Descripcion de la compra:</h4> 
                                                    <Buy orden={nOrden} />
                                                    <h4><label>Monto total de la compra:$ {totals } Pesos Uruguayos</label></h4>
                                            </div>

                                        : ''}
                    </div>
                }
            </center>

        </div>
    )

}

export default Cart;