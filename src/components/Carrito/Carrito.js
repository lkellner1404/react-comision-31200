import React from 'react'
import { useCartContext } from '../../context/cartContext'
// import img from './img.png'

 export default function Carrito(){
    const {cart} = useCartContext()
    
  return (
        <>
            <h2>SITIO EN CONSTRUCCION</h2>
            {/* <img src={img} /> */}
            <ul>
                {cart.map( item => <li key={item.id}>{item.title} - cantidad {item.cantidad} - precio ${item.price} - TOTAL ${item.cantidad * item.price}</li>)}
            </ul>
        </>
    )
}

