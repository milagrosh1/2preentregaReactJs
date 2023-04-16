const productos = [
    {id: "1", nombre: "SESION FOTOGRAFICA ESCOLAR", precio: 30000, img: "../img/acto.jpg", idCat:"1"},
    {id: "2", nombre: "SESION FOTOGRAFICA EVENTOS VARIOS", precio: 80000, img: "../img/fotoboda.jpg", idCat:"1"},
    {id: "3", nombre: "SESION FOTOGRAFICA MODA", precio: 70000, img: "../img/fotomoda.jpg", idCat:"1"},
    {id: "4", nombre: "SESION FOTOGRAFICA PUBLICITARIA", precio: 50000, img: "../img/fotoproducto.png", idCat:"1"},
    {id: "5", nombre: "FOTOS BIGCLASSIC", precio: 10000, img: "../img/fotofotos.webp", idCat:"2"},
    {id: "6", nombre: "FOTO LIBRO 21X21CM", precio: 5000, img: "../img/fotoalbum.png", idCat:"3"},

]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}




export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}