import React from 'react'
import { useCartContext } from '../../context/cartContext'
// import CartItem from '../CartItem/CartItem'

 export default function Carrito(){
    const { cart, clearCart, removeItem } = useCartContext()
    console.log(cart)

    
    
    return (
        <section className='carrito'>
            <h2>Carrito de Compras</h2>
            <ul>
                {

                cart.map( item => <li key={item.id}>{item.title} - cantidad {item.cantidad} - precio ${item.price} - TOTAL ${item.cantidad * item.price} - <button className='removeItem' onClick={removeItem} value={item.id}>Quitar Item</button></li>)
                
                }
                {/* {cart.map( item => <CartItem item={item} key={item.id}/>)} */}
            </ul>

            {/* <p>TOTAL $ {cart.reduce( (acum, item) => acum + item.total )}</p> */}
            <button onClick={clearCart}>Vaciar Carrito</button>
        </section>
    )
}

