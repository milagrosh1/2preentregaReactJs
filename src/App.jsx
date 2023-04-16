import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemlistContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Navbar/NavBar.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
