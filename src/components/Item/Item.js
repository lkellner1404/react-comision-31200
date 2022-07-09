import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({prod}) => {

    return (
        <Card>
            <Card.Img variant="top" src={prod.foto} alt={prod.altFoto} />
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>
                    <span className='desc'>{prod.description} </span>
                    <span className='precio'>Precio $ {prod.price}</span>
                </Card.Text>
                <Link to={`/detalle/${prod.id}`} >
                    <button>MAS DETALLES</button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item