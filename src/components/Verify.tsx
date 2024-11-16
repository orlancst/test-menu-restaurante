import { useLocation, useNavigate } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import QRHablador from "../assets/svg/QRHablador"
import { FormEvent, useContext, useEffect, useState } from "react"
import { OrderCheckCredentials } from "../types"
import LoaderMask from "./LoaderMask"
import { ModalAlert } from "./ModalAlert"
import { CartContext } from "../context/CartContext"
import ForbidenAccess from "./ForbidenAccess"

const $API_KEY: string = import.meta.env.VITE_API_KEY;

interface VerifyProps {
    theme: string;
    setAccessKey: React.Dispatch<React.SetStateAction<string>>
}

const Verify: React.FC<VerifyProps> = ({ theme, setAccessKey }) => {

    const { cartQuantity } = useContext(CartContext);

    const isCartEmpty = cartQuantity() > 0 ? false : true;

    const [inputRoomNumber, setInputRoomNumber] = useState<string>('')
    const [inputRoomCode, setInputRoomCode] = useState<string>('')

    const [message, setMessage] = useState<string>('')

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const roomNumber = searchParams.get('room')
    const [loader, setLoader] = useState<boolean>(false)
    const [loaderMsj, setLoaderMsj] = useState<string>('')

    useEffect(() => {
        if (localStorage.getItem('accessKey') !== '') {
            localStorage.removeItem('accessKey')
        }
    })

    const navigate = useNavigate();
    const { search } = useLocation()

    const showModalError = (msg: string) => {
        const modal = document.getElementById('modalInvalidData') as HTMLDialogElement | null
        setMessage(msg)

        if (modal) {
            modal.showModal()

        }
    }

    const handleCheck = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputRoomNumber === '') {
            showModalError('Digita el número de la habitación en el que se encuentra hospedado.')
            return false
        }

        if (inputRoomNumber !== roomNumber) {
            showModalError('El número de la habitación ingresado no es correcto.')
            return false
        }

        setLoader(true)
        setLoaderMsj('Comprobando')

        try {

            const response = await fetch(`${$API_KEY}orders/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    roomNumber: inputRoomNumber,
                    roomCode: inputRoomCode,
                })
            })

            if (!response.ok) {
                console.log(response);

                if (response.status === 403) {
                    throw new Error('El código ingresado no es el correcto.')

                } else {
                    throw new Error('Hubo un problema con la petición al server.')

                }
                
            }

            const dataReceived = await response.json()

            setAccessKey(dataReceived.accessKey)
            navigate(`/order-summary${search}`);

        } catch (error) {
            //Validar los tipos de errores que se pueden presentar al momento de enviar los campos
            //El código ingresado no coincide con el No° de la habitación.
            console.error('Error al realizar la solicitud: ', error);
            showModalError(`${error}`)

        } finally {

            setLoader(false)
        }



        // navigate(`/order-summary${search}`);
        
    }

    if (isCartEmpty) {
        return (
            <ForbidenAccess theme={theme} />
        )
    }

    return (
        <div className='flex flex-col h-lvh text-secondary'>

        {
            loader && <LoaderMask loaderMsj={loaderMsj} />
        }

            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <button onClick={() => { navigate(`/cart${search}`) }} className="flex items-center">
                        <LeftArrowIcon strokeColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} />
                        <span className="font-semibold text-xl ml-1">Atrás</span>
                </button>
            </div>
            <div className='bg-neutral grow flex flex-col items-center'>

                <form action="" onSubmit={handleCheck} className="w-3/4 py-7">
                    <label htmlFor="room-number" className="uppercase text-sm text-start font-semibold">Ingresa número de habitación</label>
                    <input type="text" name="room-number" autoComplete="off" maxLength={3} className="bg-transparent border-b focus:outline-none w-full px-4 mb-3" onChange={(e) => setInputRoomNumber(e.target.value)} />

                    <label htmlFor="room-code" className="uppercase text-sm text-start font-semibold">Ingresa código de habitación</label>
                    <input type="text" name="room-code" autoComplete="off" maxLength={5} className="bg-transparent border-b focus:outline-none w-full px-4 uppercase" onChange={(e) => setInputRoomCode(e.target.value)} />


                    <div className='text-center pt-7'>
                        <button type="submit" className="btn rounded-full px-6 bg-primary text-secondary font-bold">Continuar con mi pedido</button>
                    </div>
                </form>

                <p className="text-center font-semibold text-xs mx-10">Ingresa los datos que se encuentren en el hablador del QR escaneado anteriormente</p>

                <div className="mt-7 p-5 mb-10 border rounded-lg flex flex-col items-center">
                    <span className="font-semibold text-4xl">000</span>
                    <span className="font-semibold text-sm mb-4">No° DE HABITACIÓN</span>

                    <span className="font-semibold text-4xl">00000</span>
                    <span className="font-semibold text-sm mb-4">CÓDIGO DE HABITACIÓN</span>
                    <QRHablador />
                </div>
            </div>

            <ModalAlert message={message} />

        </div>
    )
}

export default Verify