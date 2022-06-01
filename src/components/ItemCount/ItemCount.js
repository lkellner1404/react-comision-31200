import { useState } from "react"

export default function ItemCount( {stock, initial, onAdd} ) {
    const number = Number(initial)
    const [count, setcount] = useState(number)
    const agregar =()=>{
        setcount(count + 1)
    }
    const quitar =()=>{
        setcount(count - 1)
    }

    return(
        <>
        <section>
            <button onClick={quitar}>-</button>
            <span>{count}</span>
            <button onClick={agregar}>+</button>
        </section>
        <section>
            <button>Agregar al Carrito</button>
        </section>
        </>
    )
}
