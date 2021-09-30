
import { useState, createContext, useContext} from "react";



export const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [carList, setCarList] = useState([])

    const addToCart = (item) => {
        let prevCart = [...carList]

        if (prevCart.some(i => i.item.id === item.item.id)){
            prevCart.find(i => i.item.id === item.item.id).cant += item.cant
            setCarList(prevCart)
        } else {
            setCarList([...carList, item])
        }

    }
    
    const deleteItemCart = (item) => {
        const deleteProduct = carList.filter((prod) => prod.item.id !== item.item.id);

        setCarList([...deleteProduct]);
    }

    const iconCart = () => {
        return carList.reduce( (acum, valor) => acum + valor.cant, 0)
    }

    const precioTotal = () => {
        return carList.reduce((acum, valor) => (acum + (valor.quantify * valor.item.precio)), 0)
    }


    function borrarLista() {
        carList([]);
    };

    console.log(carList);
    return (
        <cartContext.Provider value={{
            carList,
            addToCart,
            deleteItemCart,
            iconCart,
            precioTotal,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>
    )
}