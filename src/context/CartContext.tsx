import { createContext, useEffect, useState } from "react";
import { Dish, CartUser, FullCart } from "../types";
import { expireCart } from "../helpers/utils";

interface MiContexto {
    cart: FullCart;
    addToCart: (dish: Dish, cant: number, comment: string, addMore: boolean) => void;
    cartQuantity: () => number;
    cartTotalPrice: () => number;
    quantityLimit: number;
    freeQuantityLimit: number;
    freeCartQuantity: () => number;
    modifyDishQuantityOnCart: (dishId: number, add: boolean, isIncluded: boolean) => boolean;
    emptyCart: () => void;
}

interface CartProviderProps {
    children: React.ReactNode;
} 

export const CartContext = createContext<MiContexto>({
    cart: {items: [], expirationDate: null},
    addToCart: () => { },
    cartQuantity: () => 0,
    cartTotalPrice: () => 0,
    quantityLimit: 5,
    freeQuantityLimit: 2,
    freeCartQuantity: () => 0,
    modifyDishQuantityOnCart: () => false,
    emptyCart: () => { },
});

const $cart: FullCart = JSON.parse(localStorage.getItem("cart") || '{"items": [], "expirationDate": null}') as FullCart
//const $cart: CartUser[] = JSON.parse(localStorage.getItem("cart") || '[]') as CartUser[]
const $INCLUDED_CAT_ID: number = Number(import.meta.env.VITE_INCLUDED_CATEGORY_ID)

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const [cart, setCart] = useState<FullCart>($cart)

    //probablemente este valor puede aumentar o disminuir en un futuro
    const quantityLimit: number = 5
    const freeQuantityLimit: number = 2

    const addToCart = (dish: Dish, cantidad: number, comentario: string, addMore: boolean) => {

        const itemAdded: CartUser = {...dish, cantidad, comentario}
        const newItems = [...cart.items]

        const alreadyAdded = newItems.find((prod) => prod.id === itemAdded.id)

        if (alreadyAdded) {

            //category ID = 1: Plan incluido
            if (addMore && (alreadyAdded.categoryId !== $INCLUDED_CAT_ID && alreadyAdded.cantidad < quantityLimit || alreadyAdded.categoryId === $INCLUDED_CAT_ID && freeCartQuantity() < freeQuantityLimit)) {
                
                alreadyAdded.cantidad += cantidad;
            } else if (!addMore) {

                alreadyAdded.cantidad = cantidad;
                
            }

            alreadyAdded.comentario = comentario;
        } else if (!alreadyAdded && (itemAdded.categoryId !== $INCLUDED_CAT_ID || (itemAdded.categoryId === $INCLUDED_CAT_ID && freeCartQuantity() < freeQuantityLimit))) {
            
            newItems.push(itemAdded)
        }

        setCart({
            items: newItems,
            expirationDate: cart.expirationDate || expireCart(1, 0, 0, 0),
        })
        
    }

    const modifyDishQuantityOnCart = (dishId: number, add: boolean, isIncluded: boolean) => {

        const uCart = [...cart.items]
        const auxCart = uCart.find((prod) => prod.id === dishId)
        let exp = cart.expirationDate

        if (auxCart) {
            if (add) {
    
                if ((!isIncluded && auxCart.cantidad < quantityLimit) || (isIncluded && freeCartQuantity() < freeQuantityLimit)) {
                    auxCart.cantidad ++ ;
                } else {
                    return false;
                }
    
            } else {
    
                if (auxCart.cantidad > 1) {
                    auxCart.cantidad -- ;
                } else {
                    const index = uCart.indexOf(auxCart)
                    uCart.splice(index, 1)
                }

                exp = uCart.length > 0 ? cart.expirationDate : null;
                
            }

        }

        setCart({
            items: uCart,
            expirationDate: exp,
        })
        return true;

    }

    const emptyCart = () => {
        setCart({ items: [], expirationDate: null });
        localStorage.removeItem("cart")
    }

    const freeCartQuantity = ():number => {
        const freeCart = cart.items.filter((c) => c.categoryId === $INCLUDED_CAT_ID)
        return freeCart.reduce((acc, prod) => acc + prod.cantidad, 0)
        
    }

    const cartQuantity = () => {
        return cart.items.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const cartTotalPrice = () => {
        return cart.items.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
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