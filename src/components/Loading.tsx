import ByHoursLoading from "../assets/other/byhours_loading.gif"
import CarpediemLoading from "../assets/other/carpediem_loading.gif"

interface LoadingComponent {
    theme: string;
}

const Loading: React.FC<LoadingComponent> = ({theme}) => {
    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="flex justify-center mb-3">
            <img src={theme === 'carpediem' ? CarpediemLoading : ByHoursLoading} alt="" width={200} className="py-6" />
            </div>

            <h1 className="uppercase font-bold text-xl text-secondary text-center">Cargando</h1>
        </div>
    )
}

export default Loading