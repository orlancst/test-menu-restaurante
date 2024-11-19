import { useLocation, useNavigate } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import LoaderMask from "./LoaderMask";
import { ModalAlert } from "./ModalAlert";
import { adaptCartReq } from "../helpers/utils";
import ForbidenAccess from "./ForbidenAccess";

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

    useEffect(() => {

        if (accessKey) {
            localStorage.setItem('accessKey', accessKey)
        }

    }, [accessKey])

    const showModalError = (msg: string) => {
        const modal = document.getElementById('modalInvalidData') as HTMLDialogElement | null
        setMessage(msg)

        if (modal) {
            modal.showModal()

        }
    }
    
    const handleSubmitOrder = async () => {

        setLoader(true)
        setLoaderMsj('Realizando pedido')

        console.dir({
            "addedItems": adaptCartReq(cart),
            "totalAmount": cartTotalPrice()
        });
        

        try {

            const response = await fetch(`${$API_KEY}orders`, {
                method: 'POST',
                headers: {
                    'authorization': accessKey,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    "addedItems": adaptCartReq(cart),
                    "totalAmount": cartTotalPrice()
                })
            })

            if (!response.ok) {
                console.log(response);

                throw new Error('Hubo un problema con la petición al server.')
            }

            const dataReceived = await response.json()
            localStorage.setItem('orderId', dataReceived.order.id)

            navigate('/order-confirmed');

        } catch (error) {
            //Validar los tipos de errores que se pueden presentar al momento de enviar los campos
            //El código ingresado no coincide con el No° de la habitación.
            console.error('Error al realizar la solicitud: ', error);
            showModalError(`Error: ${error}`)

        } finally {

            setLoader(false)
        }

    }

    if (!accessKey && localStorage.getItem('accessKey') === '') {
        return (
            <ForbidenAccess theme={theme} />
        )
    }

    return (
        <div className='flex flex-col h-lvh text-secondary'>

            {
                loader && <LoaderMask loaderMsj={loaderMsj} />
            }

            <div className={`${theme === 'carpediem' ? 'bg-neutral' : 'bg-accent'} h-[90px] p-5 flex justify-between items-center`}>
                <button onClick={() => { navigate(`/verify${search}`) }} className="flex items-center">
                    <LeftArrowIcon strokeColor={theme === 'carpediem' ? '#ffffff' : '#ff5800'} />
                    <span className="font-semibold text-xl ml-1">Atrás</span>
                </button>
            </div>
            <div className={`${theme === 'carpediem' ? 'bg-accent' : 'bg-neutral'} grow flex flex-col items-center`}>

                <h1 className="uppercase font-bold text-xl text-primary mt-5 text-center">Resumen de tu pedido</h1>

                <div className="flex flex-col mx-8 py-7 text-sm">

                    {
                        cart.map((item) => {

                            return (
                                <div key={item.name} className="flex flex-row justify-between items-start border-b pb-1 mb-2">
                                    <span className="w-40 whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                                        {item.name}
                                    </span>
                                    <span className="mx-3">{item.cantidad}</span>
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
                        <button className={`btn btn-sm ${theme === 'carpediem' ? 'rounded-xl bg-primary text-secondary' : 'rounded-full px-6 bg-primary text-secondary'} font-bold`} onClick={handleSubmitOrder}>Confirmar pedido</button>
                    </div>

                }

            </div>

            <ModalAlert message={message} theme={theme} />

        </div>
    )
}

export default OrderSummary