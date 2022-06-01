import { useState } from "react"
import './style.css'

export default function ItemCount( {stock, initial} ) {
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

    const add =()=>{
        if (count === 0){
            console.log(`ERROR! Se trató de agregar ${count}!`)
        } else {
            console.log(`Se agregaron ${count} items al carrito`)
            alert(`Se agregaran ${count} items al carrito`)
        }
    }

    return(
        <section className="item-count">
            <section className="contador">
                <button onClick={quitar}>-</button>
                <span>{count}</span>
                <button onClick={agregar}>+</button>
            </section>
            <button onClick={add}>Agregar al Carrito</button>
        </section>
    )
}
