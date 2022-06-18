import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider=( {children} )=>{
    
    const [cart, setCart] = useState([])

    const agregarAlCarrito=(item)=>{
        setCart([...cart, item])
    }

    return (
        <CartContext.Provider 
        value={{
            cart,
            agregarAlCarrito
        }}
        >
            {children}
        </CartContext.Provider>
    )
}