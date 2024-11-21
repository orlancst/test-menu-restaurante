
interface ModalAlertProps {
    message:string;
    theme: string;
}

export const ModalAlert: React.FC<ModalAlertProps> = ({message, theme}) => {
    return (
        <dialog id="modalInvalidData" className="modal backdrop:bg-[#0000009c]">
            <div className="modal-box bg-neutral">
                <h3 className={`font-bold text-lg ${theme === 'carpediem' ? 'text-secondary' : 'text-primary'}`}>¡Hola!</h3>
                <p className="pt-1 text-sm">{message}</p>
                <div className="modal-action mt-4">
                    <form method="dialog">
                        <button className={`btn btn-sm text-base ${theme === 'carpediem' ? 'rounded-xl bg-secondary text-primary' : 'rounded-full bg-primary text-secondary'} px-6`}>Ok</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
