import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './Componentes/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/containers/ItemDetailContainer';


function App() {
 

 /*   function handleclick(evt) {
        console.log(evt.nativeEvent);
       // alert('click')
    }*/

    return(
      //browserouter envuelve el rango de uso del enrutado. Amplitud del enrutado
      //envolver los componentes que tengan una ruta con switch
      //route defina la orl y la define con el tecnico aparte
      <BrowserRouter> 
        <div 
          className="App"
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
    );
}

export default App;
