import './style.css'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer( { saludo }) {

    return(
        <main className='item-container'>
            <h1>{saludo}</h1>
            <ItemList />
        </main>
    )
}

