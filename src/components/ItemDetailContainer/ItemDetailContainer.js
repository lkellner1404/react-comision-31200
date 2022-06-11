import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../../utilities/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    const { id }=useParams()
    
    useEffect(() => {
      getFetch(2000)
        .then((respuesta)=>{
            // let indice = Math.floor(Math.random() * respuesta.length)
            let busqueda = respuesta.find( element => element.id === id)
            setItem(busqueda)
            // console.log(busqueda)
            // console.log(respuesta)
        })
        
      
    }, [])
    
    return (
        <div className='itemDetailContainer'>
            <ItemDetail propiedad={item} />
        </div>
    )
}

export default ItemDetailContainer