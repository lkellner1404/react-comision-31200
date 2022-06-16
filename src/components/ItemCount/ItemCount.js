import './style.css'

export default function ItemCount( { onAdd, btnAdd, btnSubtract, count } ) {
    
    return(
        <section className="item-count">
            <section className="contador">
                <button onClick={btnSubtract}>-</button>
                <span>{count}</span>
                <button onClick={btnAdd}>+</button>
            </section>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </section>
    )
}
