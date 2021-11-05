import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './Componentes/Cart/Cart.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/containers/ItemDetailContainer';
import  CartContextProvider  from './context/cartContext';
import Buy from './Componentes/Cart/Buy';



function App() {
 
    return(
      //browserouter envuelve el rango de uso del enrutado. Amplitud del enrutado
      //envolver los componentes que tengan una ruta con switch
      //route defina la orl y la define con el tecnico aparte
      <CartContextProvider >
            
                    <BrowserRouter> 
                          <div 
                            className="App "
                            //onClick={handleclick}  
                          > 
                                <NabVar prop={0}/>
                                
                                <Switch>
                                  <Route exact path='/'>
                                    <ItemListContainer saludo="" />
                                  </Route>
                                  <Route path='/categoria/:idCategoria' component={ItemListContainer} />

                                  <Route exact path='/item/:id' component={ItemDetailContainer}/>
                                
                                  <Route exact path='/Cart' component={Cart} />

                                  <Route exact path='/Buy' component={Buy} />
                                </Switch>
                          </div>
                    </BrowserRouter>
              
      </CartContextProvider>
    );
}

export default App;
