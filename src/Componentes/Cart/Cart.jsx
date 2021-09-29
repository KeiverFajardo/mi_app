import React from 'react';
import { useCartContext } from '../../context/cartContext';



const Cart = () => {
    
    const {carList} = useCartContext()
    return (
        <>
            <center>
                {carList.map(item => <h2>{item.item.name}</h2>)}
            </center>
            
        </>
    );

}

export default Cart;