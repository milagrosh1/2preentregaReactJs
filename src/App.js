import './components/Navbar/NavBar.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemlistContainer/ItemsListContainer';
import ListaItems from './components/Navbar/ListaItems';
function App() {
  return (
    <> 
     <NavBar />
     <ItemListContainer greeting="Hola a Todos"/>

    </>


  );
}

export default App;
