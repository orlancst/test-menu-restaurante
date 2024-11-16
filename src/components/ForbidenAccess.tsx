import { useLocation, useNavigate } from "react-router-dom";
import XmarkIcon from "../assets/svg/XmarkIcon"

interface ForbidenAccessProps {
    theme: string;
}

const ForbidenAccess: React.FC<ForbidenAccessProps> = ({ theme }) => {

    const navigate = useNavigate()

    const { search } = useLocation()


    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="flex justify-center mb-3">
                <XmarkIcon primaryColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} secondaryColor={theme === 'carpediem' ? '#ac004f' : '#c24300'} />

            </div>
            
            <h1 className="uppercase font-bold text-xl text-primary text-center">¡Lo sentimos!</h1>
            <p className="text-center text-secondary text-sm mt-4">No tienes autorización para ingresar a esta página.</p>

            <button className="btn rounded-full px-6 bg-primary text-secondary font-bold mt-5" onClick={() => { navigate(`/${search}`) }}>Ir al menú</button>
        </div>
    )
}

export default ForbidenAccess