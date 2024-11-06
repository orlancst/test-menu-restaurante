
import CheckIcon from "../assets/svg/CheckIcon"

const ThankYouPage = () => {
    return (
      <>
        <div className="flex justify-center mb-3">
          <CheckIcon primaryColor="#ff5800" secondaryColor="#c24300" />

        </div>
          <h1 className="uppercase font-bold text-xl text-primary text-center">Gracias por ayudarnos a mejorar</h1>
          <p className="text-center text-secondary text-xs mt-4">Su pedido ha sido confirmado con éxito y tiene un tiempo estimado de 20 minutos.</p>
      </>
    )
  }
  
  export default ThankYouPage