import Brand from "../Brand";
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
   return (

    <header>
<div className="containerBrand">
    <Brand />

</div>

<nav className= "containerListaItems"> 
   

      <Link to={"/"}>
        
      </Link>
      <ul>
      <li>
          <NavLink to={`/categoria/1`}>Servicios</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/2`}>Impresiones</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Albumes</NavLink>
        </li>
      </ul>


</nav>

<div className="containerCart" >
    <CartWidget />

</div>

    </header>
   )


}
export default NavBar;