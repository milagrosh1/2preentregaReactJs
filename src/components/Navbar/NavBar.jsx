import Brand from "../Brand";
import ItemListContainer from "..//ItemlistContainer/ItemsListContainer";
import CartWidget from "../CartWidget/CartWidget";
import ListaItems from "./ListaItems";


const NavBar = () => {
   return (

    <header>
<div className="containerBrand">
    <Brand />

</div>

<nav className= "containerListaItems"> 
   
   <ListaItems

    ItemUno= "Cuadros"
    ItemDos= "Impresiones"
    ItemTres= "Accesorios"
    ItemCuatro= "álbumes"

/>

</nav>

<div className="containerCart" >
    <CartWidget />

</div>

    </header>
   )


}
export default NavBar;