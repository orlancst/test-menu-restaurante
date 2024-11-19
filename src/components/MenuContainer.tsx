import CartSummary from "./CartSummary"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Loading from "./Loading"
import { useContext, useEffect, useState } from "react"
import { askForData } from "../helpers/getExampleData";
import { shortenParagraph } from "../helpers/utils"
import { Dish, Plato } from "../types";
import { CartContext } from "../context/CartContext"
import { validateAccess } from "../hooks/validateAccess"
import { findDish } from "../hooks/findDish"
import UnavailableAccess from "./UnavailableAccess"

const $API_KEY: string = import.meta.env.VITE_API_KEY;

interface MenuContainerProps {
    theme: string;
    hq: string;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ theme, hq }) => {

    const { addToCart, cartQuantity, freeQuantityLimit, freeCartQuantity } = useContext(CartContext);

    const isCartEmpty = cartQuantity() > 0 ? false : true;

    const [prods, setProds] = useState<Plato[]>([]);
    const [dishes, setDishes] = useState<Dish[]>([]);

    const [isDishDetailOpened, setIsDishDetailOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    const { data, loading, error } = validateAccess('branch', 'room', $API_KEY)
    const { dataDish, errorDish, isDishLoading, fetchDishData } = findDish()

    const [disableButton, setDisableButton] = useState<boolean>(false)

    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [prods])

    useEffect(() => {

        if (data) {
            
            setDishes(data)
            console.log(dishes);
            
        }
        
    }, [data])
    
    const handleOpenDishDetail = (id: number) => {
 
        setDisableButton(freeQuantityLimit === freeCartQuantity() ? true : false)
        setIsDishDetailOpened(true);
        //setDish(findDishData)
        fetchDishData(id, $API_KEY)

    }

    const handleOpenSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened)
    }

    if (loading) {
        return <Loading theme={theme} />
    }

    if (error || dishes.length === 0) {
        return <UnavailableAccess theme={theme} />
    }

    return (
        <>
            <Header theme={theme} hq={hq} />
            <Navbar toggleSidebar={handleOpenSidebar} theme={theme} />
            <div className="flex flex-col mx-4 my-3">

                {
                    dishes.map((dish, index) => {
                        const showCat = index === 0 || dish.categoryName !== dishes[index - 1].categoryName ? true : false;
                        const isIncluded = dish.categoryId === 7 ? true : false;
                        return (
                            <div key={dish.id} id={showCat ? `#${dish.categoryName.replace(/ /g, "_").toLocaleLowerCase()}` : undefined}>
                                {
                                    showCat &&
                                    <h3 className="text-2xl uppercase font-bold mb-1 text-primary">{dish.categoryName}</h3>
                                }
                                <h4 className="text-lg font-semibold text-secondary" onClick={() => {handleOpenDishDetail(dish.id)}}>{dish.name}</h4>
                                <p className="text-secondary text-xs">{shortenParagraph(dish.description, 80)}</p>

                                <div className="flex flex-row justify-between mb-3">
                                    <span className="font-semibold text-xl text-secondary">$ {dish.price.toLocaleString('es-ES')}</span>

                                    {
                                        (!isIncluded) ?
                                        <button className="w-7 bg-primary text-secondary rounded text-xl border border-primary" onClick={() => {addToCart(dish, 1, "", true)}}>+</button>
                                        :
                                        <>
                                            {
                                                freeQuantityLimit !== freeCartQuantity() ?
                                                <button className="w-7 bg-primary text-secondary rounded text-xl border border-primary" onClick={() => {addToCart(dish, 1, "", true)}}>+</button>
                                                :
                                                <button className="w-7 bg-transparent text-primary rounded text-xl border border-primary">+</button>
                                            }
                                        
                                        </>
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