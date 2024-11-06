import { Link } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import QRHablador from "../assets/svg/QRHablador"

const Verify = () => {

    const showModalError = () => {
        const modal = document.getElementById('modalInvalidData') as HTMLDialogElement | null

        if (modal) {
            modal.showModal()

        }
    }

    return (
        <div className='flex flex-col h-lvh font-montserrat text-secondary'>
            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <Link to="/cart" className="flex items-center">
                    <LeftArrowIcon strokeColor="#ff5800" />
                    <span className="font-semibold text-xl ml-1">Atrás</span>
                </Link>
            </div>
            <div className='bg-neutral grow flex flex-col items-center'>

                <form action="" className="w-3/4 py-7">
                    <label htmlFor="" className="uppercase text-sm text-start font-semibold">Ingresa número de habitación</label>
                    <input type="text" name="" id="" maxLength={3} className="bg-transparent border-b focus:outline-none w-full px-4 mb-3" />

                    <label htmlFor="" className="uppercase text-sm text-start font-semibold">Ingresa código de habitación</label>
                    <input type="text" name="" id="" maxLength={5} className="bg-transparent border-b focus:outline-none w-full px-4 uppercase" />
                </form>

                <div className='text-center pb-5'>
                    <button className="btn rounded-full px-6 bg-primary text-secondary font-bold" onClick={showModalError}>Continuar con mi pedido</button>
                </div>

                <p className="text-center font-semibold text-xs mx-10">Ingresa los datos que se encuentren en el hablador del QR escaneado anteriormente</p>

                <div className="mt-7 p-5 mb-10 border rounded-lg flex flex-col items-center">
                    <span className="font-semibold text-4xl">000</span>
                    <span className="font-semibold text-sm mb-4">No° DE HABITACIÓN</span>

                    <span className="font-semibold text-4xl">00000</span>
                    <span className="font-semibold text-sm mb-4">CÓDIGO DE HABITACIÓN</span>
                    <QRHablador />
                </div>
            </div>

            <dialog id="modalInvalidData" className="modal backdrop:bg-[#0000009c]">
                <div className="modal-box bg-neutral">
                    <h3 className="font-bold text-lg text-primary">¡Hola!</h3>
                    <p className="pt-1 text-sm">El código ingresado no coincide con el No° de la habitación.</p>
                    <div className="modal-action mt-4">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm rounded-full px-6 bg-primary text-secondary font-bold">Ok</button>
                        </form>
                    </div>
                </div>
            </dialog>
            
        </div>
    )
}

export default Verify