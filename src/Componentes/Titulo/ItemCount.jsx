import {useState} from 'react'


const ItemCount = ({stock, inicial}) => {
    const [count, setCount] = useState(inicial)

    function sumar(){
        if (count < stock){
            setCount(count + 1)
        }
    }

    function restar(){
        if (count>1) {
            setCount(count - 1)
        }
    }

    return(
        <div>
            <h3>soy item Count</h3>
            <label>{count}</label><br/>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount;