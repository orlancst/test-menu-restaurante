import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { UserCart } from '../types';

interface ModifyCommentProps {
    idProd: number;
    cart: UserCart[];
    isModifyCommentsOpened: boolean;
    setIsModifyCommentsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddToCart: (dish: UserCart, cant: number, comment: string, addMore: boolean) => void;
}

const ModifyComment: React.FC<ModifyCommentProps> = ({idProd, cart, isModifyCommentsOpened, setIsModifyCommentsOpened, handleAddToCart}) => {

    const [commentValue, setCommentValue] = useState("");
    const [dish, setDish] = useState<UserCart>({} as UserCart)

    const txtarea: HTMLTextAreaElement = document.querySelector('textarea[name="edit-comment"]')!

    const closeDrawer = () => {
        setIsModifyCommentsOpened(false);
        setTimeout(() => {

            setCommentValue("")

        }, 250);
    }

    const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentValue(event.target.value);
    }

    useEffect(() => {
        if (isModifyCommentsOpened) {
            const dishOnCart = cart.find((item) => item.id === idProd);

            if (dishOnCart) {
                setDish(dishOnCart)
                setCommentValue(dish.comentario)


            } else {

                setCommentValue("")

            }

        }
    }, [isModifyCommentsOpened, cart, dish])

    const handleEditomment = () => {

        handleAddToCart(dish, dish.cantidad, commentValue, false)
        closeDrawer()

    }

    if (txtarea !== null) {
        txtarea.value = commentValue
    }

  return (
    <Drawer
    open={isModifyCommentsOpened}
    onClose={closeDrawer}
    direction='bottom'
    className='bg-neutral p-5 rounded-t-xl border-t-1 border-t-black shadow-superior font-montserrat'
    style={{
        backgroundColor: '#4f0b7b',
        height: 'auto',
    }}
    lockBackgroundScroll
>
    <div className='flex flex-col'>
        <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeDrawer}>✕</button>

        <h3 className='font-semibold text-xl mt-3 text-secondary'>{dish.plato}</h3>
        <p className='text-secondary text-xs leading-4 mt-2'>
            {dish.descripcion}
        </p>
        <span className='font-semibold text-secondary text-lg mt-2'>
            $ {dish.precio !== undefined && dish.precio.toLocaleString('es-ES')}
        </span>

        <hr className='h-0 border-t-2 my-2' />

        <form action="" className='flex flex-col'>
            <label htmlFor="edit-comment" className='text-sm text-secondary mb-1'>Comentarios</label>
            <textarea name="edit-comment" cols={3} maxLength={250} className='rounded-md resize-none text-black text-xs p-2 focus:outline-none' onChange={handleChangeComment}></textarea>
            <span className='font-light text-secondary text-xs mt-1'>Deja el campo en blanco para eliminar el comentario</span>
        </form>
        <div className="flex flex-row justify-center gap-x-5 mt-6">

            <button className="rounded-full px-4 bg-primary text-secondary font-bold text-sm leading-none h-9" onClick={handleEditomment}>Editar comentario</button>
        </div>
    </div>

</Drawer>
  )
}

export default ModifyComment