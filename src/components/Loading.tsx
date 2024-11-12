import ByHoursLoading from "../assets/other/byhours_loading.gif"

const UnavailableAccess: React.FC = () => {
    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="flex justify-center mb-3">
            <img src={ByHoursLoading} alt="" width={200} className="py-6" />
            </div>

            <h1 className="uppercase font-bold text-xl text-secondary text-center">Cargando</h1>
        </div>
    )
}

export default UnavailableAccess