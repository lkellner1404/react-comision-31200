import { useState } from "react"
import './style.css'

export default function ItemCount( {stock, initial, onAdd} ) {
    const number = Number(initial)
    const [count, setcount] = useState(number)
    const agregar =()=>{
        if (stock > count){
            setcount(count + 1)
        }
    }
    const quitar =()=>{
        if (count > 0){
            setcount(count - 1)
        }
    }

    return(
        <section className="item-count">
            <section className="contador">
                <button onClick={quitar}>-</button>
                <span>{count}</span>
                <button onClick={agregar}>+</button>
            </section>
            <button>Agregar al Carrito</button>
        </section>
    )
}
