import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner';
import './style.css'

const ItemList = () => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const coleccion = collection(db,'items')

        if (categoriaId) {
            const categories = query(coleccion, where('categoria','==',categoriaId))
            getDocs(categories)
            .then((items)=>{
                setProductos( items.docs.map( (el) => 
                    (   {
                    id: el.id,
                    ...el.data()
                    }   )
                ))
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        } else {    
            getDocs(coleccion)
            .then((items)=>{
                setProductos( items.docs.map( (el) => 
                    (   {
                    id: el.id,
                    ...el.data()
                    }   )
                ))
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        }

        return ()=>{
            setProductos([])
            setLoading(true)
        }


    },[categoriaId])

    return (
        <div className='cardsProductos'>
            { loading ? 
                <>
                    <h2>Cargando...</h2>
                    <Spinner />
                </>
            : 
                productos.map((producto)=> 
                <Item prod={producto} key={producto.id}/>
            )}
        </div>
    )
}

export default ItemList