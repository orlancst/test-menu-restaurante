import { useLocation, useNavigate } from 'react-router-dom'
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import TrashCanIcon from '../assets/svg/TrashCanIcon'
import PlusIcon from '../assets/svg/PlusIcon'
import MinusIcon from '../assets/svg/MinusIcon'
import EditCommentIcon from '../assets/svg/EditCommentIcon'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ModifyComment from './ModifyComment';
import { flushSync } from 'react-dom'
import { Theme } from '../types'


const Cart: React.FC<Theme> = ({ theme }) => {

    const { cart, cartTotalPrice, modifyDishQuantityOnCart, addToCart } = useContext(CartContext);

    const [isModifyCommentsOpened, setIsModifyCommentsOpened] = useState(false);
    const [idProd, setIdProd] = useState(1)

    const navigate = useNavigate()

    const { search } = useLocation()

    //Tenerlo en un futuro...
    const goToVerify = () => {
        // navigate(`/verify${search}`);

        document.startViewTransition(() => {
            flushSync(() => {
                navigate(`/order-summary${search}`);

            })
        })
    }

    const handleOpenModifyComment = (id: number) => () => {
        setIdProd(id);
        setIsModifyCommentsOpened(true);
    }

    return (
        <>
            <div className='flex flex-col h-lvh text-secondary'>
                <div className={`${theme === 'carpediem' ? 'bg-neutral' : 'bg-accent'} h-[90px] p-5 flex justify-between items-center`}>
                    <button onClick={() => { navigate(`/${search}`) }} className="flex items-center">
                        <LeftArrowIcon strokeColor={theme === 'carpediem' ? '#ffffff' : '#ff5800'} />
                        <span className="font-semibold text-xl ml-1">Atrás</span>
                    </button>
                    <div className="flex flex-col">
                        <span className="text-sm font-light">Tu carrito</span>
                        <span className="text-xl font-bold">$ {cartTotalPrice().toLocaleString('es-ES')}</span>
                    </div>
                </div>
                <div className={`${theme === 'carpediem' ? 'bg-accent' : 'bg-neutral'} grow flex flex-col justify-between`}>

                    <div className='p-5 pb-0 flex flex-col'>


                        {
                            cart.items.length === 0 &&
                            <div className="text-center">
                                <span className="text-sm font-semibold">Tu carrito está vacío.</span>
                            </div>
                        }

                        {
                            cart.items.map((item) => {

                                const isIncluded = item.categoryId !== 7 ? false : true;

                                return (
                                    <div key={item.name} className='flex flex-col'>
                                        <div className='flex justify-between items-end'>
                                            <div className='flex flex-col'>
                                                <span className='font-bold'>{item.name}</span>
                                                <span className='font-semibold mt-1'>$ {(item.price * item.cantidad).toLocaleString('es-ES')}</span>
                                                {
                                                    item.comentario !== '' ? (
                                                        <>
                                                            <span className='font-light text-sm italic __prevent_nowrap_comments'>{item.comentario}</span>
                                                            <button className='inline-flex gap-x-1 items-center'><span className='font-light text-secondary text-md underline' onClick={handleOpenModifyComment(item.id)}>Editar comentarios</span><EditCommentIcon stroke={theme === 'carpediem' ? '#df0067' : '#ff5800'} /> </button>
                                                        </>

                                                    ) : <button className='inline-flex gap-x-1 items-center'><span className='font-light text-secondary text-md underline' onClick={handleOpenModifyComment(item.id)}>Agregar comentario</span><EditCommentIcon stroke={theme === 'carpediem' ? '#df0067' : '#ff5800'} /> </button>
                                                }
                                            </div>
                                            <div>
                                                <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1' onClick={() => { modifyDishQuantityOnCart(item.id, false, isIncluded) }}>
                                                        {
                                                            item.cantidad !== 1 ? <MinusIcon fillColor='white' /> : <TrashCanIcon />
                                                        }
                                                    </button>
                                                    <span className='grow text-center text-secondary'>{item.cantidad}</span>
                                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1' onClick={() => { modifyDishQuantityOnCart(item.id, true, isIncluded) }}>
                                                        <PlusIcon fillColor='white' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="h-0 border-t-1 mb-4 mt-2" />

                                    </div>
                                )
                            })
                        }


                    </div>

                    {
                        cart.items.length > 0 ?
                            <>

                                <div className='text-center py-5'>

                                    <button onClick={goToVerify} className={`btn ${theme === 'carpediem' ? 'rounded-xl bg-primary text-secondary' : 'rounded-full px-6 bg-primary text-secondary'} font-bold`}>Continuar con mi pedido</button>

                                </div>
                            </>
                            :
                            <div className='text-center py-5'>
                                <button onClick={() => { navigate(`/${search}`) }} className={`btn ${theme === 'carpediem' ? 'rounded-xl bg-primary text-secondary' : 'rounded-full px-6 bg-primary text-secondary'} font-bold`}>Regresar al menú</button>
                            </div>
                    }
                </div>
            </div>

            <ModifyComment idProd={idProd} cart={cart.items} isModifyCommentsOpened={isModifyCommentsOpened} setIsModifyCommentsOpened={setIsModifyCommentsOpened} handleAddToCart={addToCart} theme={theme} />
        </>
    )
}

export default Cart