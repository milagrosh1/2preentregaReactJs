import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({nombre,id,precio,img,stock}) => {

    return (
        <div className='prod'>
            <div className="card">
            <img className="card-img" src={img} alt="" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-precio">${precio}</p>
            <p className="card-id">{id}</p>
            <p className="card-stock">{stock}</p>
            <div className="card-btn">
            <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
            </div>
        </div>
        </div>
    )
}

export default Item;
