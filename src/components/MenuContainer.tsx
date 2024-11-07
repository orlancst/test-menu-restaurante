import CartSummary from "./CartSummary"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useContext, useEffect, useState } from "react"
import { askForData } from "../helpers/getExampleData";
import { shortenParagraph } from "../helpers/utils"
import { Plato } from "../types";
import { CartContext } from "../context/CartContext"

const MenuContainer: React.FC = () => {

    const { addToCart, cartQuantity } = useContext(CartContext);
    const isCartEmpty = cartQuantity() > 0 ? false : true;

    const [prods, setProds] = useState<Plato[]>([]);
    const [idProd, setIdProd] = useState(1)

    const [isDishDetailOpened, setIsDishDetailOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [prods])

    const handleOpenDishDetail = (id: number) => () => {
        setIdProd(id);
        setIsDishDetailOpened(true);
    }

    const handleOpenSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened)
    }

    return (
        <>
            <Header />
            <Navbar toggleSidebar={handleOpenSidebar} />
            <div className="flex flex-col font-montserrat mx-4 my-3">
                <div>

                    {
                        prods.map((prod, index) => {
                            const showCat = index === 0 || prod.categoria !== prods[index - 1].categoria ? true : false;
                            return (
                                <div key={prod.id} id={showCat ? `#${prod.categoria.replace(/ /g, "_").toLocaleLowerCase()}` : undefined}>
                                    {
                                        showCat &&
                                        <h3 className="text-3xl uppercase font-bold mb-2 text-primary">{prod.categoria}</h3>
                                    }
                                    <h4 className="text-xl font-semibold text-secondary" onClick={handleOpenDishDetail(prod.id)}>{prod.plato}</h4>
                                    <p className="text-secondary text-sm">{shortenParagraph(prod.descripcion, 70)}</p>

                                    <div className="flex flex-row justify-between mb-3">
                                        <span className="font-semibold text-xl text-secondary">$ {prod.precio.toLocaleString('es-ES')}</span>
                                        <button className="w-7 bg-primary text-secondary rounded text-xl" onClick={() => {addToCart(prod, 1, "")}}>+</button>
                                    </div>
                                    <hr className="h-0 border-t-1 mb-4" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {
                !isCartEmpty &&
                <CartSummary cantidad={cartQuantity()} />
            }

            
            <DishDetail idProd={idProd} isDishDetailOpened={isDishDetailOpened} setIsDishDetailOpened={setIsDishDetailOpened} handleAddToCart={addToCart} />
            <Sidebar products={prods} isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />

        </>
    )
}

export default MenuContainer