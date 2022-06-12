import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getFetch from '../../utilities/getFetch'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner';
import './style.css'

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{

        if (categoriaId) {
            getFetch(200)
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

        return ()=>{
            setProductos([])
            setLoading(true)
        }


    },[categoriaId])

    console.log(productos)

    return (
        <div className='cardsProductos'>
            { loading ? 
                <>
                    <h2>Cargando...</h2>
                    <Spinner />
                </>
            : 
                productos.map((producto)=> 
                <Item propiedad={producto} key={producto.id}/>
            )}
        </div>
    )
}

export default ItemList