import { useState } from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    
    const inicial = 1
    const maximo = 15

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
        <div className='contenedorItem'>
           <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <p>Sesion fotografica de eventos Premium Casamientos, Bautismos,Cumpleaños, Empresas.</p>
            <img src= {img} alt= {nombre} />
            <button onClick={aumento}>+</button>
            <p>{contador}</p>
            <button onClick={disminuye}>-</button>

        </div>
    )
}

export default ItemDetail
