import { useContext, useEffect, useState } from "react"
import Survey from "./Survey"
import ThankYouPage from "./ThankYouPage"
import ForbidenAccess from "./ForbidenAccess"
import LoaderMask from "./LoaderMask";
import { CartContext } from "../context/CartContext"

interface OrderConfirmedProps {
    theme: string;
    setAccessKey: React.Dispatch<React.SetStateAction<string>>
}

const OrderConfirmed: React.FC<OrderConfirmedProps> = ({ theme, setAccessKey }) => {

    const [isSurveySubmitted, setIsSurveySubmitted] = useState(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [loaderMsj, setLoaderMsj] = useState<string>('')
    const { emptyCart } = useContext(CartContext)

    const orderId: string | null = (localStorage.getItem('orderId'))

    if (!orderId && !isSurveySubmitted) {
        return <ForbidenAccess theme={theme} />
    }
    
    
    useEffect(() => {

        setAccessKey('')
        localStorage.removeItem('accessKey');
        emptyCart()

    }, [])

    return (
        <>

            {
                loader && <LoaderMask
                    loaderMsj={loaderMsj} />
            }

            <div className={`flex flex-col justify-center px-8 ${!isSurveySubmitted ? 'py-12 min-h-lvh' : 'h-lvh'}`}>
                {!isSurveySubmitted ?
                    <Survey theme={theme} orderId={orderId} setIsOrderSumbit={setIsSurveySubmitted} setLoader={setLoader} setLoaderMsj={setLoaderMsj} /> : <ThankYouPage theme={theme} />
                }
            </div>

        </>
    )
}

export default OrderConfirmed