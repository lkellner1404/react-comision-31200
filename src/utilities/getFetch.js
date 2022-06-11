//id, title, descr, price, pictureURL,stock 
let productos = [{
    id: '1',
    title: 'Chocolate amargo 70%',
    description: '200gr. de chocolate al 70% cacao.',
    categoria:'clasicos',
    price: 500,
    foto: '../assets/img/chocoamargo.png',
    altFoto: 'tableta chocolate amargo',
    stock: 10,
}, 
{
    id: '2',
    title: 'Chocolate con Leche',
    description: '200gr. de chocolate con leche, todo un clásico.',
    categoria:'clasicos',
    price: 500,
    foto: '../assets/img/chococonleche.png',
    altFoto: 'tableta chocolate con leche',
    stock: 20,
},
{
    id: '3',
    title: 'Chocolate Blanco',
    description: '200gr. de puro chocolate blanco.',
    categoria:'clasicos',
    price: 500,
    foto: '../assets/img/chocoblanco.png',
    altFoto: 'tableta chocolate blanco',
    stock: 15,
},
{
    id: '4',
    title: 'Banana con Chocolate',
    description: '150gr. de Bananas disecadas bañadas en Chocolate con leche.',
    categoria:'frutales',
    price: 600,
    foto: '../assets/img/banana.png',
    altFoto: '',
    stock: 15,
},
{
    id: '5',
    title: 'Cáscaras de Naranja',
    description: '150gr. de Cáscaras de naranja en almíbar, bañadas en Chocolate amargo.',
    categoria:'frutales',
    price: 600,
    foto: '../assets/img/naranja.png',
    altFoto: '',
    stock: 15,
},
{
    id: '6',
    title: 'Frambuesas',
    description: '130gr. de Frambuesas bañadas en Chocolate amargo.',
    categoria:'frutales',
    price: 700,
    foto: '../assets/img/frambuesas.png',
    altFoto: '',
    stock: 15,
},
{
    id: '7',
    title: 'Tableta con Maní',
    description: '150gr. de Chocolate relleno con maní.',
    categoria:'gourmet',
    price: 800,
    foto: '../assets/img/mani.png',
    altFoto: '',
    stock: 15,
},
{
    id: '8',
    title: 'Botones con DDL',
    description: '150gr. de Chocolate relleno con Dulce de Leche.',
    categoria:'gourmet',
    price: 800,
    foto: '../assets/img/rellenoddl.png',
    altFoto: '',
    stock: 15,
},
{
    id: '9',
    title: 'Botones con Nutella',
    description: '150gr. de Chocolate relleno con Nutella.',
    categoria:'gourmet',
    price: 800,
    foto: '../assets/img/rellenoddl.png',
    altFoto: '',
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