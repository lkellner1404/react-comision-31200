import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ClientForm from '../ClientForm/ClientForm'
import './style.css'

 export default function Carrito(){
    const { cart, total, clearCart, removeItem } = useCartContext()
    const [ orderId, setOrderId ] = useState('')
    const [ confirmation, setConfirmation ] = useState(false)
    const [ client, setClient ] = useState({
        name: '',
        email: '',
        confEmail: '',
        phone: ''
    })

    if (orderId){
        return(
            <section className='cart'>
                <h2>Carrito de Compras</h2>
                <section className='cart-end'>
                    <p>Su orden se generó con el ID: {orderId}</p>
                    <p>Muchas gracias por elegirnos!</p>
                </section>
            </section>
        )
    }

    if (cart.length === 0){
        return (
            <section className='cart'>
                <h2>Carrito de Compras</h2>
                <p>El carrito se encuentra vacío, para agregar productos haga <Link to='/'>CLICK AQUÍ</Link> </p>
            </section>
        )
    }

    const buy = (e) =>{
        e.preventDefault()
        if (confirmation){
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
        } else {
            alert('Por favor controle los datos proporcionados.')
        }
    }
    
    const handleInputChange = (e) => {
        setClient({
            ...client,
            [e.target.name] : e.target.value
        })
    }

    
    return (
        <section className='cart'>
            <h2>Carrito de Compras</h2>
            <div className='cart-grid'>
                <div className='cart-list'>
                    <ul>
                        {

                        cart.map( item => <li key={item.id}> <button className='removeItem' onClick={removeItem} value={item.id}>-</button> {item.title} - cantidad {item.cantidad} - precio ${item.price} - TOTAL ${item.cantidad * item.price}</li>)
                        
                        }
                    </ul>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
                <ClientForm buy={buy} handleInputChange={handleInputChange} setConfirmation={setConfirmation} confirmation={confirmation} />
                <div className='cart-total'>
                    <h3>TOTAL $ {total}</h3>
                </div>
                
            </div>
        </section>
    )
}

