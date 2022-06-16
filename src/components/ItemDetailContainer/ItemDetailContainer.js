import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../../utilities/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id }=useParams()
    
    useEffect(() => {
      getFetch(200)
        .then((respuesta)=>{
            let busqueda = respuesta.find( element => element.id === id)
            setItem(busqueda)
        })
        .finally(()=>{
            setLoading(false)
        })
        
      
    }, [])
    
    return (
        <div className='itemDetailContainer'>
            { loading ? 
                <>
                    <h2>Cargando...</h2>
                    <Spinner />
                </>
                : 
                <ItemDetail producto={item} />
            }

        </div>
    )
}

export default ItemDetailContainer