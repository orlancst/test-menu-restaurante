import { createContext, useEffect, useState } from "react";
import { Plato, UserCart } from "../types";

interface MiContexto {
    cart: UserCart[];
    addToCart: (dish: Plato, cant: number, comment: string) => void;
    cartQuantity: () => number;
    cartTotalPrice: () => number;
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext<MiContexto>({
    cart: [],
    addToCart: () => { },
    cartQuantity: () => 0,
    cartTotalPrice: () => 0,
});

const $cart: UserCart[] = JSON.parse(localStorage.getItem("cart") || '[]') as UserCart[]

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const [cart, setCart] = useState($cart)

    const addToCart = (dish: Plato, cantidad: number, comentario: string) => {

        const itemAdded = {...dish, cantidad, comentario}
        const newCart = [...cart]

        const alreadyAdded = newCart.find((prod) => prod.id === itemAdded.id)

        if (alreadyAdded) {
            alreadyAdded.cantidad = cantidad;
            alreadyAdded.comentario = comentario;
        } else {
            newCart.push(itemAdded)
        }

        setCart(newCart)
        
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const cartTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cartQuantity,
            cartTotalPrice,
            }}>

            {children}
        </CartContext.Provider>
    )
}