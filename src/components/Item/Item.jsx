import "./Item.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const Item = ({nombre,id,precio,img}) => {

    const inicial = 1
    const maximo = 100

    const [contador, setContador] = useState(inicial)

    const aumento = () => {
    if(contador < maximo){
        setContador(contador + 1)
    }
    }

    const disminuye = () => {
    if(contador > inicial){
        setContador(contador - 1)
    }
}


    return (
        <div className='prod'>
        <div className="card">
            <img className="card-img" src={img} alt="" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-precio">${precio}</p>
            <p className="card-id">{id}</p>
            <div className="card-btn">
            <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
            <button>Agregar</button>
            <button onClick={disminuye}>-</button>
            <p>{contador}</p>
            <button onClick={aumento}>+</button>
            </div>
        </div>
        </div>
    )
}

export default Item
