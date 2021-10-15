
import { useState } from 'react';
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore'


const Cart = () => {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: ''
    })

    const {carList, deleteItemCart, precioTotal} = useCartContext()
    
  
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
        //db.collection('orders').doc(id).set(orden);

        //
        ordersCol.add(orden)
        .then((IdDocumento) => {
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {
            setFormData({
                name: '',
                tel: '',
                email: ''

            })
          //  borrarLista()
            console.log('termino la promesa')
        })

      //  db.collection('orders').doc('6xPoNdVli5Vz2c6QF2OE').update({total: 600}).then(resp => console.log(resp)) ejemplo de actualizar

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
    console.log(formData)

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
                                                <div className="card product-card" key={item.id}>
                                                    <div className="card w-90 mt-6">
                                                        <div className="col-6">
                                                            <img src={item.item.foto} alt="" className='w-30'/>
                                                        </div>
                                                        <div className="row">
                                                            <label>{item.item.nombre}</label>
                                                            <span>Categoria: {item.item.categoria}</span> 
                                                            <label>Descripcion: {item.item.descripcion}</label> 
                                                            <label>Precio: $ {item.item.precio}</label> 
                                                            <label>Cantidad: {item.cant}</label> 
                                                        </div>
                        
                                                    </div>    
                                        
                                                    <button className="btn btn-outline-danger w-250" onClick={() => deleteItemCart(item)}>Eliminar</button>
                                                    <hr />
                                                </div> 
                        )}
                

                                    <form 
                                        onSubmit={handleOnSubmit}
                                        onChange={handleOnChange}
                                    >
                                        <div className="row">
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
                                                value={formData.email} 
                                            />
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Confirme el email'
                                                name='email2' 
                                                
                                            />
                                            <button className="btn btn-outline-success w-100 mt-2">Terminar Compra</button>
                                        </div>
                                    </form>


                    </div>
                }
            </center>

        </div>
    )

}

export default Cart;