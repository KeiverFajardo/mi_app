import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './Componentes/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/containers/ItemDetailContainer';
import  CartContextProvider  from './context/cartContext';
import { useState } from "react";
import { createContext } from "react";


const categorias = [
  {id: 1, categoria: "camara", nombre: "Camara Canon", foto: "../img/gabineteGamer.jpg"},
  {id: 2, categoria: "laptop", nombre: "Laptop Asus", foto: "../img/gabineteGamer.jpg"}
]

export const contextApp = createContext('kei')

function App() {
 /*   function handleclick(evt) {
        console.log(evt.nativeEvent);
       // alert('click')
    }*/
  
    const [state, setState] = useState(categorias)

    function setearStatte(item) {
      setState(item)
    }

   // console.log(cartContext)
    return(
      //browserouter envuelve el rango de uso del enrutado. Amplitud del enrutado
      //envolver los componentes que tengan una ruta con switch
      //route defina la orl y la define con el tecnico aparte
      <CartContextProvider >
            <contextApp.Provider value={{state, setearStatte}}> 
                    <BrowserRouter> 
                          <div 
                            className="App border border-3 border-primary"
                            //onClick={handleclick}  
                          > 
                                <NabVar prop={0}/>
                                
                                <Switch>
                                  <Route exact path='/'>
                                    <ItemListContainer saludo="Hola Buen dia" />
                                  </Route>
                                  <Route path='/categoria/:idCategoria' component={ItemListContainer} />

                                  <Route exact path='/item/:id' component={ItemDetailContainer}/>
                                
                                  <Route exact path='./cart' component={Cart} />
                                </Switch>
                          </div>
                    </BrowserRouter>
              </contextApp.Provider>
      </CartContextProvider>
    );
}

export default App;
