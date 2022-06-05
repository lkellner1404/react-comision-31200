import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './style.css'

const Item = ({propiedad}) => {
    console.log(propiedad.id)

    return (
        <Card>
            <Card.Img variant="top" src={propiedad.foto} alt={propiedad.altFoto} />
            <Card.Body>
                <Card.Title>{propiedad.title}</Card.Title>
                <Card.Text>
                    <span className='desc'>{propiedad.description} </span>
                    <span className='precio'>Precio $ {propiedad.price}</span>
                </Card.Text>
                <ItemCount  stock={propiedad.stock} initial="1" />
            </Card.Body>
        </Card>
    )
}

export default Item