import { useContext, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Dish, DishDetailProps } from '../types';
import { CartContext } from '../context/CartContext';
import PlusIcon from '../assets/svg/PlusIcon'
import MinusIcon from '../assets/svg/MinusIcon'


const $INCLUDED_CAT_ID: number = import.meta.env.INCLUDED_CATEGORY_ID;

const DishDetail: React.FC<DishDetailProps> = (props) => {

    const { dish, loadDish, onDishErr, isDishDetailOpened, setIsDishDetailOpened, handleAddToCart, disableButton, theme } = props
    //const [dish, setDish] = useState<Dish>({} as Dish)
    const [cant, setCant] = useState(1);
    const [price, setPrice] = useState(0);
    const [commentValue, setCommentValue] = useState("");

    const { cart, quantityLimit, freeQuantityLimit } = useContext(CartContext);

    const isDishIncluded: boolean = dish?.categoryId === $INCLUDED_CAT_ID ? true : false;
 
    const txtarea: HTMLTextAreaElement = document.querySelector('textarea[name="dish-comment"]')!
 

    const handleRestar = () => {
        cant > 1 && setCant(cant - 1)
    }

    const handleSumar = () => {

        if (dish?.categoryId !== 7) {
            cant < quantityLimit && setCant(cant + 1)

        } else {

            cant < freeQuantityLimit && setCant(cant + 1)

        }

    }

    useEffect(() => {
        if (isDishDetailOpened) {
            setCommentValue('')
        }
    }, [isDishDetailOpened])

    const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentValue(event.target.value);
    }

    const closeDrawer = () => {
        setIsDishDetailOpened(false);
        setTimeout(() => {
            setCant(1);
            setCommentValue("")

        }, 250);
    }

    useEffect(() => {
        if (isDishDetailOpened) {
            const dishOnCart = cart.items.find((item) => item.id === dish?.id);

            if (dishOnCart) {

                setCant(dishOnCart.cantidad)
                setCommentValue(dishOnCart.comentario as string)

            } else {
                setCant(1)
                setCommentValue("")

            }

        }
    }, [isDishDetailOpened, cart, dish])

    const handleAgregarAlCarrito = () => {

        handleAddToCart(dish as Dish, cant, commentValue, false)
        closeDrawer()

    }

    const handleAgregarUnoAlCarrito = () => {

        handleAddToCart(dish as Dish, 1, commentValue, true)
        closeDrawer()

    }

    useEffect(() => {
        if (dish && dish.price) {
            setPrice(dish.price * cant)
        }
    }, [cant, dish])

    if (txtarea !== null) {
        txtarea.value = commentValue
    }

    //if (!isDishDetailOpened) return null

    return (

        <Drawer
            open={isDishDetailOpened}
            onClose={closeDrawer}
            direction='bottom'
            className='bg-neutral p-5 rounded-t-xl border-t-1 border-t-black shadow-superior'
            style={{
                backgroundColor: `${theme === 'carpediem' ? '#7a142a' : '#4f0b7b'}`,
                height: 'auto',
            }}
            lockBackgroundScroll
        >
            <div className='flex flex-col'>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeDrawer}>✕</button>

                {
                    (loadDish) ? (
                        <div className="skeleton h-32 w-full mt-6"></div>
                    ) : (onDishErr) ? (
                        <p className='text-center text-sm text-secondary'>¡Ups! Ha ocurrido un error.</p>
                    ) : (
                        <>

                            <h3 className='font-semibold text-xl mt-3 text-secondary'>{dish?.name}</h3>
                            <p className='text-secondary text-xs leading-4 mt-2'>
                                {dish?.description}
                            </p>
                            <span className='font-semibold text-secondary text-lg mt-2'>
                                $ {dish?.price !== undefined && dish.price.toLocaleString('es-ES')}
                            </span>

                            <hr className='h-0 border-t-2 my-2' />

                            <form action="" className='flex flex-col'>
                                <label htmlFor="dish-comment" className='text-sm text-secondary mb-1'>Comentarios</label>
                                <textarea name="dish-comment" cols={3} maxLength={250} className='rounded-md resize-none text-black bg-white text-xs p-2 focus:outline-none' onChange={handleChangeComment}></textarea>
                            </form>

                            <div className="flex flex-row flex-wrap justify-center gap-x-5 mt-6">
                                {
                                    !isDishIncluded ?
                                        <>
                                            <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                                                <button className={`grow-0 grid place-items-center text-lg leading-none ${theme === 'carpediem' ? 'text-primary bg-secondary' : 'text-secondary bg-primary'} font-semibold rounded-full w-6 h-6 ml-1`} onClick={handleRestar}>
                                                    <MinusIcon fillColor={theme === 'carpediem' ? '#df0067' : '#ffffff'} />
                                                </button>
                                                <span className='grow text-center text-secondary'>{cant}</span>
                                                <button className={`grow-0 grid place-items-center text-lg leading-none ${theme === 'carpediem' ? 'text-primary bg-secondary' : 'text-secondary bg-primary'} font-semibold rounded-full w-6 h-6 mr-1`} onClick={handleSumar}>
                                                    <PlusIcon fillColor={theme === 'carpediem' ? '#df0067' : '#ffffff'} />
                                                </button>
                                            </div>
                                            <button className={`${theme === 'carpediem' ? 'rounded-xl px-4 bg-secondary text-primary font-semibold' : 'rounded-full px-6 bg-primary text-secondary font-bold'} text-sm leading-none h-9`} onClick={handleAgregarAlCarrito}>Agregar
                                                 $ {price.toLocaleString('es-ES')}</button>
                                        </>
                                        :
                                        <>
                                            <button className={`${!disableButton ? 'rounded-full px-4 bg-primary text-secondary font-bold text-sm leading-none h-9' : 'rounded-full btn-disabled px-4 bg-transparent text-primary font-semibold text-sm leading-none h-9 border border-primary'} `} onClick={handleAgregarUnoAlCarrito}>Agregar al carrito</button>
                                            {
                                                disableButton &&
                                                <span className='text-xs italic text-secondary text-center mt-2 px-5'>Has alcanzado la cantidad de platos que puedes pedir como obsequio.</span>
                                            }
                                        </>
                                }
                                
                            </div>
                        </>
                    )
                }


            </div>

        </Drawer>

    )
}

export default DishDetail