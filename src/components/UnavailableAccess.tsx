import XmarkIcon from "../assets/svg/XmarkIcon"


const UnavailableAccess: React.FC = () => {
    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="flex justify-center mb-3">
                <XmarkIcon primaryColor="#ff5800" secondaryColor="#c24300" />

            </div>

            <h1 className="uppercase font-bold text-xl text-primary text-center">Menú no disponible</h1>
            <p className="text-center text-secondary text-xs mt-4">Por el momento, nuestro menú no está disponible. Vuelve a intentarlo más tarde.</p>
        </div>
    )
}

export default UnavailableAccess