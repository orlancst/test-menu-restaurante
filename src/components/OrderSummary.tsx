import { useLocation, useNavigate } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderSummary: React.FC = () => {

    const { cart, cartTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const { search } = useLocation()


    const handleSubmitOrder = () => {

        //logica para enviar la orden a horus hotel y a la cocina del hotel...



        //cuando se confirme que se envio la orden, mandar a la ventana de orden confirmada
        navigate('/order-confirmed');

    }

    return (
        <div className='flex flex-col h-lvh text-secondary'>
            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <button onClick={() => { navigate(`/verify${search}`) }} className="flex items-center">
                    <LeftArrowIcon strokeColor="#ff5800" />
                    <span className="font-semibold text-xl ml-1">Atrás</span>
                </button>
            </div>
            <div className='bg-neutral grow flex flex-col'>

                <h1 className="uppercase font-bold text-xl text-primary mt-5 text-center">Resumen de tu pedido</h1>

                <div className="flex flex-col mx-8 py-7 text-sm">

                    {
                        cart.map((item) => {

                            return (
                                <div key={item.name} className="flex flex-row justify-between items-start border-b pb-1 mb-2">
                                    <span className="w-40 whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                                        {item.name}
                                    </span>
                                    <span>{item.cantidad}</span>
                                    <span className="w-24 text-right font-bold">$ {(item.price * item.cantidad).toLocaleString('es-ES')}</span>
                                </div>
                            )
                        })
                    }

                    <div className="flex flex-row justify-between items-start mb-2">
                        <span className="font-light">
                            Total
                        </span>
                        <span className="text-right font-bold text-primary">$ {cartTotalPrice().toLocaleString('es-ES')}</span>
                    </div>

                </div>

                {
                    cart.length > 0 &&
                    <div className="flex flex-row justify-center gap-x-2">
                        <button className="btn btn-sm rounded-full px-4 bg-primary text-secondary font-semibold" onClick={handleSubmitOrder}>Confirmar pedido</button>
                    </div>

                }


            </div>

        </div>
    )
}

export default OrderSummary