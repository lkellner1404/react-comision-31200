import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider=( { children } )=>{
    
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState()
    const [ total, setTotal ] = useState()

    const removeItem =(e)=>{
        const value = e.target.value
        const item = cart.findIndex( el => el.id === value)
        cart.splice(item,1)
        setCart( [ ...cart ] )
    }

    const addQuantity =()=>{
        setQuantity( cart.reduce( (acum,el) => acum + el.cantidad, 0 ) )
    }
    const addTotal =()=>{
        setTotal( cart.reduce( (acum,el) => acum + (el.cantidad * el.price), 0 ) )
    }

    const addToCart = (item) => {
        const itemDuplicado = cart.find( (el) => el.id === item.id)
        const isInCart = cart.includes(itemDuplicado)

        if (isInCart){
            const index = cart.findIndex( el => el.id === item.id)
            const addQuantity = cart[index].cantidad + item.cantidad
            cart[index].cantidad = addQuantity
        } else {
            setCart([...cart, item])
        }
        addQuantity()
        addTotal()
    }

    useEffect(()=>{
        addQuantity()
        addTotal()
    },[cart])

    const clearCart =()=>{
        setCart([])
    }

    return (
        <CartContext.Provider 
        value={{
            cart,
            quantity,
            total,
            addToCart,
            clearCart,
            removeItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}