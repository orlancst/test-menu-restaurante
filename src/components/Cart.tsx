import { Link, useNavigate } from 'react-router-dom'
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import TrashCanIcon from '../assets/svg/TrashCanIcon'
import EditCommentIcon from '../assets/svg/EditCommentIcon'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ModifyComment from './ModifyComment';

const Cart: React.FC = () => {

    const { cart, cartTotalPrice, modifyDishQuantityOnCart, addToCart } = useContext(CartContext);

    const [isModifyCommentsOpened, setIsModifyCommentsOpened] = useState(false);
    const [idProd, setIdProd] = useState(1)

    const navigate = useNavigate()

    const handleOpenModifyComment = (id: number) => () => {
        setIdProd(id);
        setIsModifyCommentsOpened(true);
    }

    return (
        <>
            <div className='flex flex-col h-lvh text-secondary'>
                <div className='bg-accent h-[90px] p-5 flex justify-between items-center'>
                    <button onClick={() => {navigate(-1)}} className="flex items-center">
                        <LeftArrowIcon strokeColor="#ff5800" />
                        <span className="font-semibold text-xl ml-1">Atrás</span>
                    </button>
                    <div className="flex flex-col">
                        <span className="text-sm font-light">Tu carrito</span>
                        <span className="text-xl font-bold">$ {cartTotalPrice().toLocaleString('es-ES')}</span>
                    </div>
                </div>
                <div className='bg-neutral grow flex flex-col justify-between'>

                    <div className='p-5 pb-0 flex flex-col'>

                        {
                            cart.map((item) => {

                                return (
                                    <div key={item.plato} className='flex flex-col'>
                                        <div className='flex justify-between items-end'>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>{item.plato}</span>
                                                {
                                                    item.comentario !== '' ? (
                                                        <>
                                                            <span className='font-light text-xs italic'>{item.comentario}</span>
                                                            <button className='inline-flex gap-x-1 items-center'><span className='font-light text-primary text-xs underline' onClick={handleOpenModifyComment(item.id)}>Editar comentarios</span><EditCommentIcon stroke='#ff5800' /> </button>
                                                        </>

                                                    ) : <button className='inline-flex gap-x-1 items-center'><span className='font-light text-primary text-xs underline' onClick={handleOpenModifyComment(item.id)}>Agregar comentario</span><EditCommentIcon stroke='#ff5800' /> </button>
                                                }
                                                <span className='font-semibold mt-1'>$ {(item.precio * item.cantidad).toLocaleString('es-ES')}</span>
                                            </div>
                                            <div>
                                                <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1' onClick={() => { modifyDishQuantityOnCart(item.id, false) }}>
                                                        {
                                                            item.cantidad !== 1 ? '-' : <TrashCanIcon />
                                                        }
                                                    </button>
                                                    <span className='grow text-center text-secondary'>{item.cantidad}</span>
                                                    <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1' onClick={() => { modifyDishQuantityOnCart(item.id, true) }}>+</button>
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
                        cart.length > 0 &&
                        <div className='text-center py-5'>
                            <Link to='/verify'>
                                <button className="btn rounded-full px-6 bg-primary text-secondary font-bold">Continuar con mi pedido</button>

                            </Link>
                        </div>

                    }
                </div>
            </div>

            <ModifyComment idProd={idProd} cart={cart} isModifyCommentsOpened={isModifyCommentsOpened} setIsModifyCommentsOpened={setIsModifyCommentsOpened} handleAddToCart={addToCart} />
        </>
    )
}

export default Cart