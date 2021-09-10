import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/NavBar/ItemListContainer';
import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

    const añadir = (cant) => {
      setCount(cant)
      //alert(cant)
    }

    console.dir(count)
    return(
      <div className="App"
      
      > 
        <NabVar count={count}/>
        <ItemListContainer saludo="Hola Buen dia" añadir={añadir} />
      </div>
      
    );
}

export default App;
