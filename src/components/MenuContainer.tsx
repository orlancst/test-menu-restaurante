import CartSummary from "./CartSummary"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import { askForData } from "../helpers/getExampleData";
import { shortenParagraph } from "../helpers/utils"
import { Plato } from "../types";

const MenuContainer: React.FC = () => {


    const [prods, setProds] = useState<Plato[]>([]);
    const [idProd, setIdProd] = useState(0)

    const [isOpen, setIsOpen] = useState(false);
    // const toggleDrawer = () => {
    //     setIsOpen(true);
    // }


    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [prods])

    const handleOpenDishDetail = (id: number) => (event: React.MouseEvent<HTMLHeadingElement>) => {
        setIdProd(id);
        setIsOpen(true);
    }

    return (
        <>
            <Header />
            <Navbar />
            <div className="flex flex-col font-montserrat mx-4 my-3">
                <div>

                    {
                        prods.map((prod, index) => {
                            const showCat = index === 0 || prod.categoria !== prods[index - 1].categoria ? true : false;
                            return (
                                <div key={prod.id}>
                                    {
                                        showCat &&
                                        <h3 className="text-3xl uppercase font-bold mb-2 text-primary">{prod.categoria}</h3>
                                    }
                                    <h4 className="text-xl font-semibold text-secondary" onClick={handleOpenDishDetail(prod.id)}>{prod.plato}</h4>
                                    <p className="text-secondary">{shortenParagraph(prod.descripcion, 50)}</p>

                                    <div className="flex flex-row justify-between mb-3">
                                        <span className="font-semibold text-xl text-secondary">$ {prod.precio.toLocaleString('es-ES')}</span>
                                        <button className="w-7 bg-primary text-secondary rounded text-xl">+</button>
                                    </div>
                                    <hr className="h-0 border-t-1 mb-4" />
                                </div>
                            )
                        })
                    }


                    {/* <h3 className="text-3xl uppercase font-bold mb-2 text-primary">Carnes</h3>
                    <h4 className="text-xl font-semibold text-secondary" onClick={() => {
                        dishDetailRef.current?.toggleDrawer()
                    }}>Baby Reef</h4> */}



                </div>
            </div>

            {/* <CartSummary /> */}
            <DishDetail idProd={idProd} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar products={prods} />

        </>
    )
}

export default MenuContainer