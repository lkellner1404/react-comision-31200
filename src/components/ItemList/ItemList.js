import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getFetch from '../../utilities/getFetch'
import Item from '../Item/Item'
import './style.css'

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{

        if (categoriaId) {
            getFetch(2000)
            .then((respuesta)=>{
                setProductos(respuesta.filter(elemento => elemento.categoria === categoriaId))
            })
            .catch(error => console.log(error))
            .finally(()=>{
                console.log("productos cargados")
                setLoading(false)
            })
        } else {
            getFetch(2000)
            .then((respuesta)=>{
                setProductos(respuesta)
            })
            .catch(error => console.log(error))
            .finally(()=>{
                console.log("productos cargados")
                setLoading(false)
            })
        }
    },[categoriaId])

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