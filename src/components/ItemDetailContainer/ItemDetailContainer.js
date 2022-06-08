import React, { useEffect, useState } from 'react'
import getFetch from '../../utilities/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
      getFetch(2000)
        .then((respuesta)=>{
            let indice = Math.floor(Math.random() * respuesta.length)
            setItem(respuesta[indice])
        })
        
      
    }, [])
    
    console.log(item)



    return (
        <div className='itemDetailContainer'>
            <ItemDetail propiedad={item} />
        </div>
    )
}

export default ItemDetailContainer