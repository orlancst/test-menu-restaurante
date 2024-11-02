import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Platos } from '../types';

const Sidebar: React.FC<Platos> = ({products}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebarDrawer = () => {
        setIsSidebarOpen((prevState) => !prevState)
    }

    const categories = [...new Set(products.map(prod => prod.categoria))]

    const categoryCount = categories.map(category => {
        const count = products.filter(prod => prod.categoria === category).length

        return { category, cant: count }
    })

    return (
        <div>
            <button className='btn' onClick={toggleSidebarDrawer}>Sidebar</button>
            <Drawer
                open={isSidebarOpen}
                onClose={toggleSidebarDrawer}
                direction='left'
                className='bg-neutral py-5 rounded-tr-xl border-t-1 border-t-black shadow-superior font-montserrat'
                style={{
                    backgroundColor: '#4f0b7b',

                }}
                lockBackgroundScroll
            >
                <div className='flex flex-col'>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={toggleSidebarDrawer}>✕</button>

                    <h2 className='text-center font-bold text-secondary mt-4 mb-2'>Categorias</h2>
                    <hr className='h-0 border-t-1' />

                    {
                        categoryCount.map(cat => (
                            <div key={cat.category} className='flex flex-col p-4 border-b border-b-secondary text-secondary'>
                                <h3 className='font-semibold uppercase'>{cat.category}</h3>
                                <p className='text-sm'>{cat.cant} producto{cat.cant !== 1 ? 's' : ''}</p>
                            </div>
                        ))
                    }

                </div>
            </Drawer>
        </div>
    )
}

export default Sidebar