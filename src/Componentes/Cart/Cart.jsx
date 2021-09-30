import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'


const Cart = () => {
    
    const {carList, deleteItemCart} = useCartContext()

    return (
        <div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos perferendis, vel velit pariatur hic recusandae corporis dolorem obcaecati est incidunt tempora maiores, odit porro totam, a necessitatibus quis enim.</p>

           
            <center>
                ({carList} === [])
                ?  
                    {
                        <Link to={'/'} >
                            <h3>No hay Items.</h3>
                            <button className="btn btn-outline-info w-250">Buscar Productos</button>
                        </Link>
                    }
                :
                    {
                        carList.map(item => 
                                    <div key={item.id}>
                                        <h2>{item.item.nombre}</h2>
                                        <h3>{item.item.categoria}</h3>
                                        <img src={item.item.foto} alt="" />
                                        <button onClick={() => deleteItemCart(item)}>x</button>
                                    </div>)
                    }
            </center>
            
        </div>
    );

}

export default Cart;