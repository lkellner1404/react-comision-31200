import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider=( {children} )=>{
    
    const [cart, setCart] = useState([])

    // const isInCart = (el) => cart.includes(el.id)

    const removeItem =(e)=>{
        const value = e.target.value
        const item = cart.findIndex( el => el.id === value)
        cart.splice(item,1)
        setCart([...cart])
        console.log(cart)
    }

    const agregarAlCarrito=(item)=>{
        setCart([...cart, item])
    }

    const clearCart =()=>{
        setCart([])
    }
    
    

    return (
        <CartContext.Provider 
        value={{
            cart,
            agregarAlCarrito,
            clearCart,
            removeItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}