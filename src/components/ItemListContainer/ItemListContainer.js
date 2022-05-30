import './style.css'

export default function ItemListContainer( { saludo }) {
    return(
        <main className='item-container'>
            <h1>{saludo}</h1>
        </main>
    )
}

