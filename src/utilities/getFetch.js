//id, title, descr, price, pictureURL,stock 
let productos = [{
    id: '1',
    title: 'Chocolate amargo 70%',
    description: 'Mas amargo que el primer mate',
    price: 500,
    foto: 'assets/img/chocoamargo.png',
    altFoto: 'tableta chocolate amargo',
    stock: 10,
}, 
{
    id: '2',
    title: 'Chocolate con Leche',
    description: 'Como le gusta a tu señora',
    price: 500,
    foto: '../assets/img/chococonleche.png',
    altFoto: 'tableta chocolate con leche',
    stock: 20,
},
{
    id: '3',
    title: 'Chocolate Blanco',
    description: 'Mas Blanco que la casaca del Real Madrid',
    price: 500,
    foto: '../../assets/img/chocoblanco.png',
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