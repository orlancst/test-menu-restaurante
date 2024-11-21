import { createContext, useEffect, useState } from "react";
import { Dish, CartUser } from "../types";

interface MiContexto {
    cart: CartUser[];
    addToCart: (dish: Dish, cant: number, comment: string, addMore: boolean) => void;
    cartQuantity: () => number;
    cartTotalPrice: () => number;
    quantityLimit: number;
    freeQuantityLimit: number;
    freeCartQuantity: () => number;
    modifyDishQuantityOnCart: (dishId: number, add: boolean, isIncluded: boolean) => void;
    emptyCart: () => void;
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
    freeCartQuantity: () => 0,
    modifyDishQuantityOnCart: () => { },
    emptyCart: () => { },
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

            //category ID = 7: Plan incluido
            if (addMore && (alreadyAdded.categoryId !== 7 && alreadyAdded.cantidad < quantityLimit || alreadyAdded.categoryId === 7 && freeCartQuantity() < freeQuantityLimit)) {
                
                alreadyAdded.cantidad += cantidad;
            } else if (!addMore) {

                alreadyAdded.cantidad = cantidad;
                
            }

            alreadyAdded.comentario = comentario;
        } else if (!alreadyAdded && (itemAdded.categoryId !== 7 || (itemAdded.categoryId === 7 && freeCartQuantity() < freeQuantityLimit))) {
            
            newCart.push(itemAdded)
        }

        setCart(newCart)
        
    }

    const modifyDishQuantityOnCart = (dishId: number, add: boolean, isIncluded: boolean) => {

        const uCart = [...cart]
        const auxCart = uCart.find((prod) => prod.id === dishId)

        if (auxCart) {
            if (add) {
    
                if ((!isIncluded && auxCart.cantidad < quantityLimit) || (isIncluded && freeCartQuantity() < freeQuantityLimit)) {
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

    const emptyCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    const freeCartQuantity = ():number => {
        const freeCart = cart.filter((c) => c.categoryId === 7)
        return freeCart.reduce((acc, prod) => acc + prod.cantidad, 0)
        
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
            freeCartQuantity,
            modifyDishQuantityOnCart,
            emptyCart
            }}>

            {children}
        </CartContext.Provider>
    )
}