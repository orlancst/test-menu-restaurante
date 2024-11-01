import CartSummary from "./CartSummary"
import DishDetail, { DishDetailDrawer } from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useRef, useState } from "react"

import { askForData } from "../helpers/getExampleData";
import { Plato } from "../types";

const MenuContainer: React.FC = () => {

    const dishDetailRef = useRef<DishDetailDrawer>(null)

    const [prods, setProds] = useState<Plato[]>([]);
    const [actualCat, setActualCat] = useState<string>('');

    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [])

    return (
        <>
            <Header />
            <Navbar />
            <div className="flex flex-col font-montserrat mx-4 my-3">
                <div>

                    {/* {
                        prods.map((prod) => {
                            let showCat = false;
                            if (prod.categoria !== actualCat) {
                                setActualCat(prod.categoria)
                                showCat = true;
                            }

                            return (
                                <div key={prod.id}>
                                    {
                                        showCat &&
                                        <h3 className="text-3xl uppercase font-bold mb-2 text-primary">{actualCat}</h3>
                                    }
                                </div>
                            )
                        })
                    } */}


                    <h3 className="text-3xl uppercase font-bold mb-2 text-primary">Carnes</h3>
                    <h4 className="text-xl font-semibold text-secondary" onClick={() => {
                        dishDetailRef.current?.toggleDrawer()
                    }}>Baby Reef</h4>
                    <p className="text-secondary">250gr de filete de lomo fino a la plancha sazonado con sal...</p>
                    <div className="flex flex-row justify-between mb-3">
                        <span className="font-semibold text-xl text-secondary">$ 20.000</span>
                        <button className="w-7 bg-primary text-secondary rounded text-xl">+</button>
                    </div>
                    <hr className="h-0 border-t-1" />

                </div>
            </div>

            {/* <CartSummary /> */}
            <DishDetail ref={dishDetailRef} />
            <Sidebar />

        </>
    )
}

export default MenuContainer