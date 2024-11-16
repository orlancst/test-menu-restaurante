import { createContext, useEffect, useState } from "react";
import { Plato, UserCart, Dish, CartUser } from "../types";

interface MiContexto {
    cart: CartUser[];
    addToCart: (dish: Dish, cant: number, comment: string, addMore: boolean) => void;
    cartQuantity: () => number;
    cartTotalPrice: () => number;
    quantityLimit: number;
    freeQuantityLimit: number; 
    modifyDishQuantityOnCart: (dishId: number, add: boolean) => void;
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext<MiContexto>({
    cart: [],
    addToCart: () => { },
    cartQuantity: () => 0,
    cartTotalPrice: () => 0,
    quantityLimit: 5,
    freeQuantityLimit: 2,
    modifyDishQuantityOnCart: () => { },
});

const $cart: CartUser[] = JSON.parse(localStorage.getItem("cart") || '[]') as CartUser[]

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const [cart, setCart] = useState($cart)

    //probablemente este valor puede aumentar o disminuir en un futuro
    const quantityLimit: number = 5
    const freeQuantityLimit: number = 2

    const addToCart = (dish: Dish, cantidad: number, comentario: string, addMore: boolean) => {

        const itemAdded: CartUser = {...dish, cantidad, comentario}
        const newCart = [...cart]

        const alreadyAdded = newCart.find((prod) => prod.id === itemAdded.id)

        if (alreadyAdded) {
            if (addMore && alreadyAdded.cantidad < quantityLimit) {
                alreadyAdded.cantidad += cantidad;
            } else if (!addMore) {
                alreadyAdded.cantidad = cantidad;
            }

            alreadyAdded.comentario = comentario;
        } else {
            newCart.push(itemAdded)
        }

        setCart(newCart)
        
    }

    const modifyDishQuantityOnCart = (dishId: number, add: boolean) => {

        const uCart = [...cart]
        const auxCart = uCart.find((prod) => prod.id === dishId)

        if (auxCart) {
            if (add) {
    
                if (auxCart.cantidad < quantityLimit) {
                    auxCart.cantidad ++ ;
                }
    
            } else {
    
                if (auxCart.cantidad > 1) {
                    auxCart.cantidad -- ;
                } else {
                    const index = uCart.indexOf(auxCart)
                    uCart.splice(index, 1)
                }
            }

        }

        setCart(uCart)

    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const cartTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
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
            quantityLimit,
            freeQuantityLimit,
            modifyDishQuantityOnCart,
            }}>

            {children}
        </CartContext.Provider>
    )
}