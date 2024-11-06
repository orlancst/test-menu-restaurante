import CheckIcon from "../assets/svg/CheckIcon"

const Survey = () => {
    return (
        <>
            <h1 className="uppercase font-bold text-xl text-primary text-center">Pedido confirmado</h1>
            <p className="text-center text-secondary text-xs mt-3">Su pedido ha sido confirmado con éxito y tiene un tiempo estimado de 20 minutos.</p>
            <div className="flex justify-center my-6">
                <CheckIcon primaryColor="#ff5800" secondaryColor="#c24300" />
            </div>
            <h2 className="font-bold text-lg text-center text-secondary">Ayúdanos a mejorar</h2>
            <span className="text-center text-lg text-secondary">Solo te llevará 30 segundos.</span>

            <form action="" className="flex flex-col my-5">

                <label htmlFor="" className="text-secondary font-medium text-sm mb-2">
                    1. ¿Qué tan fácil te resultó utilizar esta herramienta para realizar tu pedido?
                </label>
                <div className="flex flex-row mb-3">
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-1" className="radio radio-xs radio-primary mr-2" defaultChecked /> <span className="text-secondary text-xs font-light" >Fácil</span></label>
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-1" className="radio radio-xs radio-primary mr-2" /> <span className="text-secondary text-xs font-light">Difícil</span></label>
                </div>

                <label htmlFor="" className="text-secondary font-medium text-sm mb-2">
                    2. ¿Consideras que la información en el menú es clara y comprensible?
                </label>
                <div className="flex flex-row mb-3">
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-2" className="radio radio-xs radio-primary mr-2" defaultChecked /> <span className="text-secondary text-xs font-light">De acuerdo</span></label>
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-2" className="radio radio-xs radio-primary mr-2" /> <span className="text-secondary text-xs font-light">En desacuerdo</span></label>
                </div>

                <label htmlFor="" className="text-secondary font-medium text-sm mb-2">
                    3. ¿Te gustaría usar esta herramienta en lugar de llamar a recepción en el futuro?
                </label>
                <div className="flex flex-row mb-3">
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-3" className="radio radio-xs radio-primary mr-2" defaultChecked /> <span className="text-secondary text-xs font-light">Probablemente sí</span></label>
                    <label className="flex items-center w-1/2"><input type="radio" name="radio-3" className="radio radio-xs radio-primary mr-2" /> <span className="text-secondary text-xs font-light">Probablemente no</span></label>
                </div>

                <label htmlFor="" className="text-secondary font-medium text-sm mb-2">
                    4. Sugerencias
                </label>
                <textarea name="dish-comment" cols={3} maxLength={100} className='rounded-md resize-none text-black text-xs p-2 focus:outline-none' placeholder="Responde brevemente..."></textarea>

                <div className="flex justify-center mt-5">
                    <button className="btn rounded-full px-6 bg-primary text-secondary font-bold">Enviar respuestas</button>
                </div>

            </form>
        </>
    )
}

export default Survey