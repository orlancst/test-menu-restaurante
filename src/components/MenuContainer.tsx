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
import { validateAccess, findDish } from "../hooks/validateAccess"
import UnavailableAccess from "./UnavailableAccess"

interface DishData {
    findDishData: Dish | null;
    findDishError: string | null;
}

const $API_KEY: string = import.meta.env.VITE_API_KEY;

const MenuContainer: React.FC = () => {

    const { addToCart, cartQuantity } = useContext(CartContext);
    const isCartEmpty = cartQuantity() > 0 ? false : true;

    const [prods, setProds] = useState<Plato[]>([]);
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [dish, setDish] = useState<Dish>()
    const [idProd, setIdProd] = useState(1)

    const [isDishDetailOpened, setIsDishDetailOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    const { data, loading, error } = validateAccess('branch', 'room', $API_KEY)

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
        setIdProd((id));
        setIsDishDetailOpened(true);
    }

    // const handleOpenDishDetail = async (id: number) => {
    //     setIdProd((id));

    //     try {
            
    //         findDish(id)
    //             .then((response) => {
    //                 console.log(response);

    //                 if (!response?.findDishError) {
                        
    //                     setDish(response?.findDishData ?? undefined)
    //                     setIsDishDetailOpened(true);
    //                 } else {
    //                     console.log('indicar error de que el plato no se encontro');
                        
    //                 }
                    
    //             })


    //     } catch (err) {
    //         console.error("An unexpected error occurred:", error);
    //     }
    
    // }


    const findDish = async (id: number) :Promise<DishData | null> => {

        try {

            const response = await fetch(`${$API_KEY}restaurants/menu/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error(`Hubo un error: ${response.status}: ${response.statusText}`);
            }

            const data: Dish = await response.json() as Dish
            return {findDishData: data, findDishError: null}

        } catch (error) {

            let errorMessage: string = "Error desconocido"

            if (error instanceof Error) {
                errorMessage = error.message;
            }

            return {findDishData: null, findDishError: errorMessage}
        }
        
    }

    const handleOpenSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened)
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <UnavailableAccess />
    }

    return (
        <>
            <Header />
            <Navbar toggleSidebar={handleOpenSidebar} />
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
                                    <button className="w-7 bg-primary text-secondary rounded text-xl" onClick={() => {}}>+</button>
                                    {/* <button className="w-7 bg-primary text-secondary rounded text-xl" onClick={() => { addToCart(dish, 1, "", true) }}>+</button> */}
                                </div>
                                <hr className="h-0 border-t-1 mb-4" />
                            </div>
                        )
                    })
                }

            </div>
            {
                !isCartEmpty &&
                <CartSummary cantidad={cartQuantity()} />
            }


            <DishDetail idProd={idProd} isDishDetailOpened={isDishDetailOpened} setIsDishDetailOpened={setIsDishDetailOpened} handleAddToCart={addToCart} />
            <Sidebar dishes={dishes} isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />

        </>
    )
}

export default MenuContainer