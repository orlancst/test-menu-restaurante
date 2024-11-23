import CartSummary from "./CartSummary"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Loading from "./Loading"
import QuantityCounter from "./QuantityCounter"
import { useContext, useEffect, useRef, useState } from "react"
import { shortenParagraph } from "../helpers/utils"
import { Dish } from "../types";
import { CartContext } from "../context/CartContext"
import { validateAccess } from "../hooks/validateAccess"
import { findDish } from "../hooks/findDish"
import UnavailableAccess from "./UnavailableAccess"
import PlusIcon from '../assets/svg/PlusIcon'

const $API_KEY: string = import.meta.env.VITE_API_KEY;

interface MenuContainerProps {
    theme: string;
    hq: string;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ theme, hq }) => {

    const { cart, addToCart, cartQuantity, quantityLimit, freeQuantityLimit, freeCartQuantity } = useContext(CartContext);
    const isCartEmpty = cartQuantity() > 0 ? false : true;
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [isDishDetailOpened, setIsDishDetailOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);
    const { data, loading, error } = validateAccess('branch', 'room', $API_KEY)
    const { dataDish, errorDish, isDishLoading, fetchDishData } = findDish()
    const [disableButton, setDisableButton] = useState<boolean>(false)

    const [isQuantityCounterVisible, setIsQuantityCounterVisible] = useState<number | null>(null);
    const quantityCounterVisibleRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {

        if (localStorage.getItem('orderId')) {
            localStorage.removeItem('orderId')
        }

    }, [])

    const handleClickFuera = (event: MouseEvent) => {
        if (quantityCounterVisibleRef.current && !quantityCounterVisibleRef.current.contains(event.target as Node)) {
            setIsQuantityCounterVisible(null)
        }
     }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickFuera)

        return () => {
            document.removeEventListener("mousedown", handleClickFuera)
        }

    }, [])

    useEffect(() => {

        if (data) {

            if (data.length > 0) {

                setDishes(data)
                
            }

        }

    }, [data])

    const handleOpenDishDetail = (id: number) => {

        setDisableButton(freeQuantityLimit === freeCartQuantity() ? true : false)
        setIsDishDetailOpened(true);
        //setDish(findDishData)
        fetchDishData(id, $API_KEY)

    }

    const handleAddButton = (dish: Dish, cant: number, comment: string, addMore: boolean) => {

        setIsQuantityCounterVisible((prev) => (prev === dish.id ? null : dish.id))
        addToCart(dish, cant, comment, addMore)

    }

    const handleOpenSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened)
    }

    if (loading) {
        return <Loading theme={theme} />
    }

    if (error) {
        return <UnavailableAccess theme={theme} />
    }



    return (
        <>
            <Header theme={theme} hq={hq} />
            <Navbar toggleSidebar={handleOpenSidebar} theme={theme} />
            <div className="flex flex-col mx-4 my-3">

                {
                    dishes?.map((dish, index) => {
                        const showCat = index === 0 || dish.categoryName !== dishes[index - 1].categoryName ? true : false;
                        const isIncluded = dish.categoryId === 7 ? true : false;

                        //validar si el producto seleccionado alcanzó el tope permitido para agregar al carrito
                        const isOnCart = cart.find((it) => it.id === dish.id)
                        const maxSelected = isOnCart && isOnCart.cantidad === quantityLimit
                        
                        return (
                            <div key={dish.id} id={showCat ? `#${dish.categoryName.replace(/ /g, "_").toLocaleLowerCase()}` : undefined}>
                                {
                                    showCat &&
                                    <h3 className="text-2xl uppercase font-bold mb-1 text-primary">{dish.categoryName}</h3>
                                }

                                <div onClick={() => { handleOpenDishDetail(dish.id) }}>

                                    <h4 className="text-lg font-semibold text-secondary" >{dish.name}</h4>
                                    <p className="text-secondary text-xs">{shortenParagraph(dish.description, 75)} <span className="text-primary font-semibold ml-1">Ver más</span></p>
                                </div>


                                <div className="relative flex flex-row justify-between mb-3">
                                    <span className="font-semibold text-xl text-secondary">$ {dish.price.toLocaleString('es-ES')}</span>

                                    {
                                        (!isIncluded) ?
                                            <>
                                                {
                                                    !maxSelected ?
                                                    <button className="w-7 bg-primary rounded text-xl border border-primary flex justify-center items-center" onClick={() => { handleAddButton(dish, 1, "", true) }}><PlusIcon fillColor='white' /></button>
                                                    :
                                                    <button className="w-7 bg-transparent rounded text-xl border border-primary flex justify-center items-center"><PlusIcon fillColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} /></button>
                                                }
                                            
                                            </>
                                            :
                                            <>
                                                {
                                                    freeQuantityLimit !== freeCartQuantity() ?
                                                        <button className="w-7 bg-primary rounded text-xl border border-primary flex justify-center items-center" onClick={() => { addToCart(dish, 1, "", true) }}><PlusIcon fillColor='white' /></button>
                                                        :
                                                        <button className="w-7 bg-transparent rounded text-xl border border-primary flex justify-center items-center"><PlusIcon fillColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} /></button>
                                                }

                                            </>
                                    }

                                    {
                                        isQuantityCounterVisible === dish.id && (
                                            <div ref={quantityCounterVisibleRef} className="absolute right-0 top-[-3px] z-40 bg-neutral border-2 rounded-badge shadow-lg px-3 py-1 flex gap-x-2 align-middle">
                                                <QuantityCounter />

                                            </div>

                                        )
                                    }

                                </div>
                                <hr className="h-0 border-t-1 mb-4" />
                            </div>
                        )
                    })
                }

            </div>
            {
                !isCartEmpty &&
                <CartSummary theme={theme} cantidad={cartQuantity()} />
            }

            <DishDetail dish={dataDish} loadDish={isDishLoading} onDishErr={errorDish} isDishDetailOpened={isDishDetailOpened} setIsDishDetailOpened={setIsDishDetailOpened} handleAddToCart={addToCart} disableButton={disableButton} theme={theme} />
            <Sidebar dishes={dishes} isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} theme={theme} />

        </>
    )
}

export default MenuContainer