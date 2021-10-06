
import { useState, createContext, useContext} from "react";



export const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [carList, setCarList] = useState([])

    const addToCart = (item, cant) => {
        const index = carList.findIndex(i => i.item.id === item.id)
        console.log(index)

        if (index> -1) {
            const oldQy = carList[index].cant

            carList.splice(index, 1)
            setCarList([...carList, {item, cant: cant + oldQy}])
        }
        else {
            setCarList([...carList, {item, cant}])
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