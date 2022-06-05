//id, title, descr, price, pictureURL,stock 
let productos = [{
    id: '1',
    title: 'Chocolate amargo 70%',
    description: '200gr. de chocolate al 70% cacao.',
    price: 500,
    foto: './assets/img/chocoamargo.png',
    altFoto: 'tableta chocolate amargo',
    stock: 10,
}, 
{
    id: '2',
    title: 'Chocolate con Leche',
    description: '200gr. de chocolate con leche, todo un clásico.',
    price: 500,
    foto: './assets/img/chococonleche.png',
    altFoto: 'tableta chocolate con leche',
    stock: 20,
},
{
    id: '3',
    title: 'Chocolate Blanco',
    description: '200gr. de puro chocolate blanco.',
    price: 500,
    foto: './assets/img/chocoblanco.png',
    altFoto: 'tableta chocolate blanco',
    stock: 15,
}]


const getFetch = (timeout) => {
    return (
        new Promise ( (resolve) => {
            setTimeout( () =>{
                resolve(productos)
            },timeout)
        })
    )
}

export default getFetch