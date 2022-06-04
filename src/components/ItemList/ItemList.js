import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import getFetch from '../../utilities/getFetch'
import Item from '../Item/Item'
import './style.css'

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        getFetch(2000)
        .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=>{
            console.log("productos cargados")
            setLoading(false)
        })
    },[])

    console.log(productos)

    return (
        <div className='cardsProductos'>
            { loading ? 
                <>
                    <h2>Cargando...</h2>
                    <Spinner animation="border" />
                </>
            : 
                productos.map((producto)=> 
                <Item propiedad={producto} key={producto.id}/>
            )}
        </div>
    )
}

export default ItemList