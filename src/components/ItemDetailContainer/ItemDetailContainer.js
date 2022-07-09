import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id }=useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const detail = doc(db,'items',id)
        getDoc(detail)
            .then((element)=>{
                setItem({id: element.id, ...element.data()})
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])
    
    return (
        <section className='itemDetailContainer'>
            { loading ? 
                <>
                    <h2>Cargando...</h2>
                    <Spinner />
                </>
                : 
                <ItemDetail producto={item} />
            }

        </section>
    )
}

export default ItemDetailContainer