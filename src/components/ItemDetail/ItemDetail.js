import React, { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import GoToCart from '../GoToCart/GoToCart'
import ItemCount from '../ItemCount/ItemCount'
import './style.css'

const ItemDetail = ({producto}) => {
    
    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const { cart, addToCart } = useCartContext()

    const addCount = () => {
        if (producto.stock > count){
        setCount(count + 1)
        }
    }
    const subtractCount = () => {
        if (count > 1){
        setCount(count - 1)
        }
    }
    const onAdd = () => {
        setClick(true)
        addToCart({ ...producto, cantidad: count })
    }

    return (
    <div className='itemDetail'>
        <img src={producto.foto} alt={producto.altFoto} />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p>${producto.price}</p>

        { click ?

        <GoToCart />
        :
        <ItemCount initial='1' onAdd={onAdd} btnAdd={addCount} btnSubtract={subtractCount} count={count} />
        }
    </div>
    )
}

export default ItemDetail