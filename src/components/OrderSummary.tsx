import { useLocation, useNavigate } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import LoaderMask from "./LoaderMask";
import { ModalAlert } from "./ModalAlert";
import { adaptCartReq } from "../helpers/utils";

const $API_KEY: string = import.meta.env.VITE_API_KEY;

interface OrderSummaryProps {
    theme: string;
    accessKey: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ theme, accessKey }) => {

    const { cart, cartTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const { search } = useLocation()

    const [message, setMessage] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [loaderMsj, setLoaderMsj] = useState<string>('')

    const showModalError = (msg: string) => {
        const modal = document.getElementById('modalInvalidData') as HTMLDialogElement | null
        setMessage(msg)

        if (modal) {
            modal.showModal()

        }
    }

    const handleSubmitOrder = async () => {

        console.log(
            {
                "addedItems": adaptCartReq(cart),
                "totalAmount": cartTotalPrice()
            }
        )


        // setLoader(true)
        // setLoaderMsj('Realizando pedido')
        
        // try {
        //     console.log(accessKey);

        //     const response = await fetch(`${$API_KEY}orders`, {
        //         method: 'POST',
        //         headers: {
        //             'authorization': accessKey,
        //             'Content-Type': 'application/json',
                    
        //         },
        //         body: JSON.stringify({

        //         })
        //     })

        //     if (!response.ok) {
        //         console.log(response);
                
        //         throw new Error('Hubo un problema con la petición al server.')
        //     }

        //     const dataReceived = await response.json()
        //     console.log(dataReceived);
            


        // } catch (error) {
        //     //Validar los tipos de errores que se pueden presentar al momento de enviar los campos
        //     //El código ingresado no coincide con el No° de la habitación.
        //     console.error('Error al realizar la solicitud: ', error);
        //     showModalError(`Error: ${error}`)

        // } finally {

        //     setLoader(false)
        // }


        //cuando se confirme que se envio la orden, mandar a la ventana de orden confirmada
        //navigate('/order-confirmed');

    }

    return (
        <div className='flex flex-col h-lvh text-secondary'>

            {
                loader && <LoaderMask loaderMsj={loaderMsj} />
            }

            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <button onClick={() => { navigate(`/verify${search}`) }} className="flex items-center">
                    <LeftArrowIcon strokeColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} />
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

            <ModalAlert message={message} />

        </div>
    )
}

export default OrderSummary