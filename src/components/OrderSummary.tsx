import { Link } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"

const OrderSummary = () => {
    return (
        <div className='flex flex-col h-lvh font-montserrat text-secondary'>
            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <Link to="/verify" className="flex items-center">
                    <LeftArrowIcon strokeColor="#ff5800" />
                    <span className="font-semibold text-xl ml-1">Atrás</span>
                </Link>
            </div>
            <div className='bg-neutral grow flex flex-col'>

                <h1 className="uppercase font-bold text-xl text-primary mt-5 text-center">Resumen de tu pedido</h1>

                <div className="flex flex-col mx-8 py-7 text-sm">
                    <div className="flex flex-row justify-between items-start border-b pb-1 mb-2">
                        <span className="w-40 whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                            Steak Pimienta Pimienta
                        </span>
                        <span>2</span>
                        <span className="w-24 text-right font-bold">$ 80.000</span>
                    </div>
                    <div className="flex flex-row justify-between items-start border-b pb-1 mb-2">
                        <span className="w-40 whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                            Baby Reef
                        </span>
                        <span>1</span>
                        <span className="w-24 text-right font-bold">$ 80.000</span>
                    </div>

                    <div className="flex flex-row justify-between items-start mb-2">
                        <span className="font-light">
                            Total
                        </span>
                        <span className="text-right font-bold text-primary">$ 280.000</span>
                    </div>

                </div>

                <div className="flex flex-row justify-center gap-x-2">
                <button className="btn btn-sm rounded-full px-4 bg-primary text-secondary font-semibold">Confirmar pedido</button>
                <button className="btn btn-sm rounded-full px-4 bg-secondary text-primary font-semibold">Cancelar pedido</button>
                </div>

            </div>

        </div>
    )
}

export default OrderSummary