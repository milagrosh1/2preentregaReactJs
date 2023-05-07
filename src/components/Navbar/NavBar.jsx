import Brand from "../Brand";
import CartWidget from "../CartWidget/CartWidget"
import '../Navbar/NavBar.css'
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/Brand.svg"
const NavBar = () => {
   
return (
    <>
        <header className='logo'>
    <nav className="nav-bar">
        <Link to={"/"}>
        <img href="" src={logo} className="logo-medidas" alt="" />
        </Link>
        <ul className="nav-item">
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
        
    </header>
    
    
    <CartWidget/>
    </>
    )
    }
    
    export default NavBar