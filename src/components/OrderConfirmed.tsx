import { useState } from "react"
import Survey from "./Survey"
import ThankYouPage from "./ThankYouPage"

const OrderConfirmed = () => {

    const [isSurveySubmitted, setIsSurveySubmitted] = useState(false)


    return (
        <div className={`flex flex-col justify-center mx-8 font-montserrat ${!isSurveySubmitted ? 'my-12 min-h-lvh' : 'h-lvh'}`}>
            {!isSurveySubmitted ?
                <Survey /> : <ThankYouPage />
            }
        </div>
    )
}

export default OrderConfirmed