import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider=( {children} )=>{
    
    const [cart, setCart] = useState([])

    const removeItem =(e)=>{
        const value = e.target.value
        const item = cart.findIndex( el => el.id === value)
        cart.splice(item,1)
        setCart([...cart])
        console.log(cart)
    }

    

    const agregarAlCarrito = (item) => {
        const itemDuplicado = cart.find( (el) => el.id === item.id)
        const isInCart = cart.includes(itemDuplicado)
        console.log(isInCart)

        if (isInCart){
            const indice = cart.findIndex( el => el.id === item.id)
            // console.log(indice)
           const sumaCant = cart[indice].cantidad + item.cantidad
           cart[indice].cantidad = sumaCant
           console.log(sumaCant)
        //    setCart([...cart, item])
        } else {
            setCart([...cart, item])
        }

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