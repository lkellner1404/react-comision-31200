import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ClientForm from '../ClientForm/ClientForm'

 export default function Carrito(){
    const { cart, total, clearCart, removeItem } = useCartContext()
    const [ orderId, setOrderId ] = useState('')
    const [ client, setClient ] = useState({
        name: '',
        email: '',
        phone: ''
    })

    if (orderId){
        return(
            <section className='carrito'>
                <h2>Carrito de Compras</h2>
                <p>Su orden se generó con el ID: {orderId}</p>
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

    const buy = (e) =>{
        e.preventDefault()
        const items = cart.map((items)=>{
            const id = items.id
            const title = items.title
            const price = items.price
            const cantidad = items.cantidad
            const totalProd = price * cantidad
            return {id:id, title:title, price:price, cantidad:cantidad, total: totalProd}
        })
        const order =
            {
                buyer: client,
                items: items,
                total: total,
                date: new Date()
            }
        const db = getFirestore()
        const orderCollection = collection(db,'orders')
        addDoc(orderCollection, order)
            .then(( { id } ) => setOrderId(id))
            .finally(()=>clearCart())
        console.log(orderId)
    }
    
    const handleInputChange = (e) => {
        setClient({
            ...client,
            [e.target.name] : e.target.value
        })
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
            
            <ClientForm buy={buy} handleInputChange={handleInputChange} />
        </section>
    )
}

