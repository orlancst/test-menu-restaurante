import { Link } from 'react-router-dom'
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import TrashCanIcon from '../assets/svg/TrashCanIcon'

const Cart = () => {
    return (
        <div className='flex flex-col h-lvh font-montserrat text-secondary'>
            <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                <Link to="/" className="flex items-center">
                    <LeftArrowIcon strokeColor="#ff5800" />
                    <span className="font-semibold text-xl ml-1">Atrás</span>
                </Link>
                <div className="flex flex-col">
                    <span className="text-sm font-light">Tu carrito</span>
                    <span className="text-xl font-bold">$ 80.000</span>
                </div>
            </div>
            <div className='bg-neutral grow flex flex-col justify-between'>

                <div className='p-5 pb-0 flex flex-col'>

                    <div className='flex flex-col'>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Steak Pimienta Steak Pimienta Steak Pimienta</span>
                                <span className='font-semibold'>$ 80.000</span>
                            </div>
                            <div>
                                <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1' onClick={() => { }}>
                                        -
                                    </button>
                                    <span className='grow text-center text-secondary'>2</span>
                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1' onClick={() => { }}>+</button>
                                </div>
                            </div>
                        </div>

                        <hr className="h-0 border-t-1 mb-4 mt-2" />

                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Steak Pimienta</span>
                                <span className='font-semibold'>$ 80.000</span>
                            </div>
                            <div>
                                <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1' onClick={() => { }}>
                                        <TrashCanIcon />
                                    </button>
                                    <span className='grow text-center text-secondary'>1</span>
                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1' onClick={() => { }}>+</button>
                                </div>
                            </div>
                        </div>

                        <hr className="h-0 border-t-1 mb-4 mt-2" />

                    </div>

                </div>


                <div className='text-center py-5'>
                    <button className="btn rounded-full px-6 bg-primary text-secondary font-bold">Continuar con mi pedido</button>
                </div>
            </div>
        </div>
    )
}

export default Cart