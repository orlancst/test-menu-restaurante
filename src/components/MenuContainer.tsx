import CartSummary from "./CartSummary"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Navbar from "./Navbar"

const MenuContainer: React.FC = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="flex flex-col font-montserrat mx-4 my-3">
                <h3 className="text-3xl uppercase font-bold mb-2 text-primary">Carnes</h3>
                <div>
                    <h4 className="text-xl font-semibold text-secondary">Baby Reef</h4>
                    <p className="text-secondary">250gr de filete de lomo fino a la plancha sazonado con sal...</p>
                    <div className="flex flex-row justify-between mb-3">
                        <span className="font-semibold text-xl text-secondary">$ 20.000</span>
                        <button className="w-7 bg-primary text-secondary rounded text-xl">+</button>
                    </div>
                    <hr className="h-0 border-t-1" />

                </div>
            </div>

            {/* <CartSummary /> */}
            <DishDetail />

        </>
    )
}

export default MenuContainer