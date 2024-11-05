import { Link } from "react-router-dom"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"

const Verify = () => {
  return (
    <div className='flex flex-col h-lvh font-montserrat text-secondary'>
    <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
        <Link to="/cart" className="flex items-center">
            <LeftArrowIcon strokeColor="#ff5800" />
            <span className="font-semibold text-xl ml-1">Atrás</span>
        </Link>
    </div>
    <div className='bg-neutral grow flex flex-col text-center'>

        <form action="" className="w-3/4">
            <label htmlFor="" className="uppercase text-xs text-start">Ingresa número de habitación</label>
            <input type="text" name="" id="" maxLength={3} className="bg-transparent border-b" />
        </form>

        <div className='text-center py-5'>
            <button className="btn rounded-full px-6 bg-primary text-secondary font-bold">Continuar con mi pedido</button>
        </div>
    </div>
</div>
  )
}

export default Verify