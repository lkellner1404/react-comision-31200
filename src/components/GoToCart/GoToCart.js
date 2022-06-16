import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const GoToCart = () => {
  return (
    <section className="item-count">
        <Link to='/'>
            <button className='continueShopping'>Seguir Comprando</button>
        </Link>
        <Link to='/cart' >
            <button className='toCart'>Continuar al Carrito</button>
        </Link>
    </section>
  )
}

export default GoToCart