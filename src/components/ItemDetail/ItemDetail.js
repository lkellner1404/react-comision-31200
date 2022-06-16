import React, { useState } from 'react'
import GoToCart from '../GoToCart/GoToCart'
import ItemCount from '../ItemCount/ItemCount'
import './style.css'

const ItemDetail = ({producto}) => {
  
  const [count, setCount] = useState(1)
  const [click, setClick] = useState(false)

  const agregar =()=>{
    if (producto.stock > count){
      setCount(count + 1)
    }
  }
  const quitar =()=>{
    if (count > 1){
      setCount(count - 1)
    }
  }
  const onAdd =()=>{
    if (count === 0){
      console.log(`ERROR! Se trató de agregar ${count}!`)
    } else {
      console.log(`Se agregaron ${count} items al carrito`)
      setClick(true)
    }
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
      <ItemCount initial='1' onAdd={onAdd} btnAdd={agregar} btnSubtract={quitar} count={count} />
    }
  </div>
  )
}

export default ItemDetail