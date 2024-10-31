import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const DishDetail: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <>
            <button onClick={toggleDrawer} className='btn'>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='bottom'
                className='bg-neutral p-5 rounded-t-xl border-t-1 border-t-black shadow-superior font-montserrat'
                style={{
                    backgroundColor: '#4f0b7b',
                    height: 'auto',
                }}
                lockBackgroundScroll
            >
                <div className='flex flex-col'>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={toggleDrawer}>✕</button>

                    <h3 className='font-semibold text-xl mt-3 text-secondary'>Steak Pimienta</h3>
                    <p className='text-secondary text-xs leading-4 mt-2'>
                    250gr de lomo fino picado en una base de caldo de carne, crema de leche, granos de pimienta y especias. Acompañado de ensalada del chef y papas a la francesa o patacones.
                    </p>
                    <span className='font-semibold text-secondary text-lg mt-2'>
                        $ 80.000
                    </span>

                    <hr className='h-0 border-t-2 my-2' />

                    <form action="" className='flex flex-col'>
                        <label htmlFor="dish-comment" className='text-sm text-secondary mb-1'>Comentarios</label>
                        <textarea name="dish-comment" cols={3} maxLength={250} className='rounded-md resize-none text-black text-sm p-2'></textarea>
                    </form>
                    <div className="flex flex-row justify-center gap-x-5 mt-6">
                        <div className='border-2 border-white rounded-full flex flex-row items-center w-24 h-9'>
                            <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semiboldbold bg-primary rounded-full w-6 h-6 ml-1'>-</button>
                            <span className='grow text-center text-secondary'>1</span>
                            <button className='grow-0 grid place-items-center text-lg leading-none text-secondary font-semibold bg-primary rounded-full w-6 h-6 mr-1'>+</button>
                        </div>
                        <button className="rounded-full px-4 bg-primary text-secondary font-bold text-sm leading-none h-9">Agregar $ 80.000</button>
                    </div>
                </div>

            </Drawer>
        </>
    )
}

export default DishDetail