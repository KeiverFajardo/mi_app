
import { useState, createContext, useContext} from "react";



export const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

const EstadoInicial = {
    itemAñadirs: [{name:"Monitor", cantidad: 1}], 
    Precio: 0
};

export default function CartContextProvider ({children}) {
    
    const [carList, setCarList] = useState(EstadoInicial)

    function addToCart(item) {
        if (carList.itemAñadirs.some((itemAñadir) => itemAñadir.name === item.name)) {
            return;
        }  
    
        const nuevoItemAñadirs = carList.itemAñadirs.map((product) => {
            if (product.name === "Monitor") return {...product, cantidad: 2};

            return product;
        });
        
        setCarList({...carList, itemAñadirs: nuevoItemAñadirs });
    };

    function borrarLista() {
        carList(EstadoInicial);
    };

    console.log(carList);
    return (
        <cartContext.Provider value={{
            carList,
            addToCart,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>
    )
}