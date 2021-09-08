import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './Componentes/NavBar/NabVar';
import ItemListContainer from './Componentes/NavBar/ItemListContainer';

function App() {
  return (
      <> 
        <NabVar ciudad= {["Montevideo", "Palermo", "Salto", "Chuy"]}/>
        <ItemListContainer saludo="Hola Buen dia" />
      </>
      
  )
}
export default App;
