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

    const { addToCart, cartQuantity } = useContext(CartContext);

    const isCartEmpty = cartQuantity() > 0 ? false : true;

    const [prods, setProds] = useState<Plato[]>([]);
    const [dishes, setDishes] = useState<Dish[]>([]);

    const [isDishDetailOpened, setIsDishDetailOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    const { data, loading, error } = validateAccess('branch', 'room', $API_KEY)
    const { dataDish, errorDish, isDishLoading, fetchDishData } = findDish()

    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [prods])

    useEffect(() => {

        if (data) {
            
            setDishes(data)
            
        }
        
    }, [data])
    
    

    const handleOpenDishDetail = (id: number) => {
 
        setIsDishDetailOpened(true);
        //setDish(findDishData)
        fetchDishData(id, $API_KEY)

    }

    const handleOpenSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened)
    }

    if (loading) {
        return <Loading />
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
                        return (
                            <div key={dish.id} id={showCat ? `#${dish.categoryName.replace(/ /g, "_").toLocaleLowerCase()}` : undefined}>
                                {
                                    showCat &&
                                    <h3 className="text-3xl uppercase font-bold mb-2 text-primary">{dish.categoryName}</h3>
                                }
                                <h4 className="text-xl font-semibold text-secondary" onClick={() => {handleOpenDishDetail(dish.id)}}>{dish.name}</h4>
                                <p className="text-secondary text-sm">{shortenParagraph(dish.description, 70)}</p>

                                <div className="flex flex-row justify-between mb-3">
                                    <span className="font-semibold text-xl text-secondary">$ {dish.price.toLocaleString('es-ES')}</span>
                                    <button className="w-7 bg-primary text-secondary rounded text-xl" onClick={() => {addToCart(dish, 1, "", true)}}>+</button>

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


            <DishDetail dish={dataDish} loadDish={isDishLoading} onDishErr={errorDish} isDishDetailOpened={isDishDetailOpened} setIsDishDetailOpened={setIsDishDetailOpened} handleAddToCart={addToCart} />
            <Sidebar dishes={dishes} isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />

        </>
    )
}

export default MenuContainer