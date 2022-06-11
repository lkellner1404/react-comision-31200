import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './style.css'

const ItemDetail = ({propiedad}) => {
  return (
    <div className='itemDetail'>
        <img src={propiedad.foto} alt={propiedad.altFoto} />
        <h2>{propiedad.title}</h2>
        <p>{propiedad.description}</p>
        <p>${propiedad.price}</p>
        <ItemCount stock={propiedad.stock} initial='1' />
    </div>
  )
}

export default ItemDetail