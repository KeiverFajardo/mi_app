import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/NavBar/ItemListContainer';
import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/NavBar/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

    const añadir = (cant) => {
      setCount(cant)
      //alert(cant)
    }

    return(
      <div className="App"
      
      > 
        <NabVar count={count}/>
        <ItemListContainer saludo="Hola Buen dia" añadir={añadir} />
        <ItemDetailContainer  />
      </div>
      
    );
}

export default App;
