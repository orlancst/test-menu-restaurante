

interface ModalAlertProps {
    message:string;
}

export const ModalAlert: React.FC<ModalAlertProps> = ({message}) => {
    return (
        <dialog id="modalInvalidData" className="modal backdrop:bg-[#0000009c]">
            <div className="modal-box bg-neutral">
                <h3 className="font-bold text-lg text-primary">¡Hola!</h3>
                <p className="pt-1 text-sm">{message}</p>
                <div className="modal-action mt-4">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm rounded-full px-6 bg-primary text-secondary font-bold">Ok</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
