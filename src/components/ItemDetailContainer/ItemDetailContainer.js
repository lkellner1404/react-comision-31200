import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
// import getFetch from '../../utilities/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id }=useParams()
    
    // // ------- TOMO ID DE PROD DE GETFETCH
    // useEffect(() => {
    //   getFetch(200)
    //     .then((respuesta)=>{
    //         let busqueda = respuesta.find( element => element.id === id)
    //         setItem(busqueda)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(()=>{
        const db = getFirestore()
        const detalle = doc(db,'items',id)
        getDoc(detalle)
            .then((element)=>{
                setItem({id: element.id, ...element.data()})
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