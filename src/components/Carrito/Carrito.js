import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
// import CartItem from '../CartItem/CartItem'

 export default function Carrito(){
    const { cart, total, clearCart, removeItem } = useCartContext()
    const [ ordenId, setOrdenId ] = useState('')
    console.log(cart)

    if (ordenId){
        return(
            <section className='carrito'>
                <h2>Carrito de Compras</h2>
                <p>Su orden se generó con el ID: {ordenId}</p>
                <p>Muchas gracias por elegirnos!</p>
            </section>
        )
    }

    if (cart.length === 0){
        return (
            <section className='carrito'>
                <h2>Carrito de Compras</h2>
                <p>El carrito se encuentra vacío, para agregar productos haga <Link to='/'>CLICK AQUÍ</Link> </p>
            </section>
        )
    }

    const comprar = () =>{
        const items = cart.map((items)=>{
            const id = items.id
            const title = items.title
            const price = items.price
            const cantidad = items.cantidad
            const totalProd = price * cantidad
            return {id:id, title:title, price:price, cantidad:cantidad, total: totalProd}
        })
        const orden =
            {
                buyer: {name:'AAAAA',phone:'111111',email:'aaaa@aaaa'},
                items: items,
                total: total,
                date: new Date()
            }
        
        const db = getFirestore()
        const ordenes = collection(db,'orders')
        addDoc(ordenes, orden)
            .then(( { id } ) => setOrdenId(id))
            .finally(()=>clearCart())
        console.log(ordenId)
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
                <button onClick={comprar}>COMPRAR</button>
            </div>
            <div className='carrito--total'>
                <h3>TOTAL $ {total}</h3>
            </div>
            {
                ordenId && <p>Su orden se generó con el ID: {ordenId}</p>
            }
        </section>
    )
}

