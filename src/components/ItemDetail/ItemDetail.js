import React from 'react'
import './style.css'

const ItemDetail = ({propiedad}) => {
  return (
    <div className='itemDetail'>
        <img src={propiedad.foto} alt={propiedad.altFoto} />
        <h2>{propiedad.title}</h2>
        <p>{propiedad.description}</p>
        <p>${propiedad.price}</p>
        <button>COMPRAR</button>
    </div>
  )
}

export default ItemDetail