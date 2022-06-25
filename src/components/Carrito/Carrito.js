import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
// import CartItem from '../CartItem/CartItem'

 export default function Carrito(){
    const { cart, total, clearCart, removeItem } = useCartContext()
    console.log(cart)

    if (cart.length === 0){
        return (
            <section className='carrito'>
                <h2>Carrito de Compras</h2>
                <p>El carrito se encuentra vacío, para agregar productos haga <Link to='/'>CLICK AQUÍ</Link> </p>
                
            </section>
        )
    }
    
    
    return (
        <section className='carrito'>
            <h2>Carrito de Compras</h2>
            <div className='carrito--lista'>
                <ul>
                    {

                    cart.map( item => <li key={item.id}>{item.title} - cantidad {item.cantidad} - precio ${item.price} - TOTAL ${item.cantidad * item.price} - <button className='removeItem' onClick={removeItem} value={item.id}>Quitar Item</button></li>)
                    
                    }
                </ul>
                <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
            <div className='carrito--total'>
                <h3>TOTAL $ {total}</h3>
            </div>
        </section>
    )
}

