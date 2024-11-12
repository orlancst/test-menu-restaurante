import { useContext, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { askForItem } from '../helpers/getExampleData';
import { Plato, Dish } from '../types';
import { CartContext } from '../context/CartContext';

interface DrawerProps {
    idProd: number;
    isDishDetailOpened: boolean;
    setIsDishDetailOpened: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddToCart: (dish: Dish, cant: number, comment: string, addMore: boolean) => void;
}

const DishDetail: React.FC<DrawerProps> = (props) => {

    const { idProd, isDishDetailOpened, setIsDishDetailOpened, handleAddToCart } = props
    const [dish, setDish] = useState<Dish>({} as Dish)
    const [cant, setCant] = useState(1);
    const [price, setPrice] = useState(0);
    const [commentValue, setCommentValue] = useState("");
    const { cart, quantityLimit } = useContext(CartContext);

    const txtarea: HTMLTextAreaElement = document.querySelector('textarea[name="dish-comment"]')!

    const handleRestar = () => {
        cant > 1 && setCant(cant - 1)
    }

    const handleSumar = () => {
        cant < quantityLimit && setCant(cant + 1)
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
        askForItem(idProd)
            .then((res) => {

                setDish(res as Dish)


            })

    }, [idProd])

    useEffect(() => {
        if (isDishDetailOpened) {
            const dishOnCart = cart.find((item) => item.id === dish.id);

            if (dishOnCart) {
                
                setCant(dishOnCart.cantidad)
                setCommentValue(dishOnCart.comentario)


            } else {
                setCant(1)
                setCommentValue("")

            }

        }
    }, [isDishDetailOpened, cart, dish])

    const handleAgregarAlCarrito = () => {

        handleAddToCart(dish, cant, commentValue, false)
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
                backgroundColor: '#4f0b7b',
                height: 'auto',
            }}
            lockBackgroundScroll
        >
            <div className='flex flex-col'>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeDrawer}>✕</button>

                <h3 className='font-semibold text-xl mt-3 text-secondary'>{dish.price}</h3>
                <p className='text-secondary text-xs leading-4 mt-2'>
                    {dish.description}
                </p>
                <span className='font-semibold text-secondary text-lg mt-2'>
                    $ {dish.price !== undefined && dish.price.toLocaleString('es-ES')}
                </span>

                <hr className='h-0 border-t-2 my-2' />

                <form action="" className='flex flex-col'>
                    <label htmlFor="dish-comment" className='text-sm text-secondary mb-1'>Comentarios</label>
                    <textarea name="dish-comment" cols={3} maxLength={250} className='rounded-md resize-none text-black text-xs p-2 focus:outline-none' onChange={handleChangeComment}></textarea>
                </form>
                <div className="flex flex-row justify-center gap-x-5 mt-6">
                    <div className='border border-white rounded-full flex flex-row items-center w-24 h-9'>
                        <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1' onClick={handleRestar}>-</button>
                        <span className='grow text-center text-secondary'>{cant}</span>
                        <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1' onClick={handleSumar}>+</button>
                    </div>
                    <button className="rounded-full px-4 bg-primary text-secondary font-bold text-sm leading-none h-9" onClick={handleAgregarAlCarrito}>Agregar $ {price.toLocaleString('es-ES')}</button>
                </div>
            </div>

        </Drawer>

    )
}

export default DishDetail