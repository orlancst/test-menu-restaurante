import { useState } from "react"
import Survey from "./Survey"
import ThankYouPage from "./ThankYouPage"
import ForbidenAccess from "./ForbidenAccess"
import LoaderMask from "./LoaderMask";

interface OrderConfirmedProps {
    theme: string;
}

const OrderConfirmed: React.FC<OrderConfirmedProps> = ({ theme }) => {

    const [isSurveySubmitted, setIsSurveySubmitted] = useState(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [loaderMsj, setLoaderMsj] = useState<string>('')

    const orderId: string | null = (localStorage.getItem('orderId'))

    if (!orderId && !isSurveySubmitted) {
        return <ForbidenAccess theme={theme} />
    }

    localStorage.removeItem('accessKey');
    localStorage.removeItem('cart')

    return (
        <>

            {
                loader && <LoaderMask
                    loaderMsj={loaderMsj} />
            }

            <div className={`flex flex-col justify-center mx-8 ${!isSurveySubmitted ? 'my-12 min-h-lvh' : 'h-lvh'}`}>
                {!isSurveySubmitted ?
                    <Survey theme={theme} orderId={orderId} setIsOrderSumbit={setIsSurveySubmitted} setLoader={setLoader} setLoaderMsj={setLoaderMsj} /> : <ThankYouPage theme={theme} />
                }
            </div>

        </>
    )
}

export default OrderConfirmed