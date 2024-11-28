import XmarkIcon from "../assets/svg/XmarkIcon"
import { Theme } from '../types'

const UnavailableAccess: React.FC<Theme> = ({ theme }) => {
    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="flex justify-center mb-3">
                <XmarkIcon primaryColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} secondaryColor={theme === 'carpediem' ? '#ac004f' : '#c24300'} />
            </div>
            
            <h1 className="uppercase font-bold text-xl text-primary text-center">Menú no disponible</h1>
            <p className="text-center text-secondary text-xs mt-4">Por el momento nuestro menú no está disponible. Vuelve a intentarlo más tarde.</p>
        </div>
    )
}

export default UnavailableAccess