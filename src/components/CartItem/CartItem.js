import React from 'react'
import { Card } from 'react-bootstrap'

const CartItem = ( {item} ) => {
    return (
        <Card>
            <Card.Img variant="top" src={item.foto} alt={item.altFoto} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <span className='desc'>{item.description} </span>
                    <span className='precio-un'>Precio $ {item.price}</span>
                    <p className='precio-total'>TOTAL $ {item.price * item.cantidad}</p>
                </Card.Text>
                    <button>COMPRAR</button>
            </Card.Body>
        </Card>
    )
}

export default CartItem