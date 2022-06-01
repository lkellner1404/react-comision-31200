import ItemCount from '../ItemCount/ItemCount'
import './style.css'

export default function ItemListContainer( { saludo }) {
    return(
        <main className='item-container'>
            <h1>{saludo}</h1>
            <ItemCount stock="20" initial="1" />
        </main>
    )
}

