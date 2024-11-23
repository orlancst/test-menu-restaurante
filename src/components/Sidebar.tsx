
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ dishes, isSidebarOpened, setIsSidebarOpened, theme }) => {

    const closeSidebar = () => {
        setIsSidebarOpened(false);
    }

    const styles = {
        backgroundColor: `${theme === 'carpediem' ? '#7a142a' : '#4f0b7b'}`,
    }
    const categories = [...new Set(dishes.map(dish => dish.category.name))]
    const categoryCount = categories.map(category => {
        const count = dishes.filter(dish => dish.category.name === category).length

        return { category, cant: count }
    })

    const handleScrollToSection = (scrollCategory: string) => {
        
        const section = document.getElementById(`#${scrollCategory}`)

        if (section) {
            closeSidebar()
            //section.scrollIntoView({ behavior:'smooth' })
            window.scrollTo({behavior:'smooth', top: section.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 75})
        }
        
    }

    // ${theme === 'carpediem' ? '#7a142a' : '#4f0b7b'}

    return (
        <div>
            <Drawer
                open={isSidebarOpened}
                onClose={closeSidebar}
                direction='left'
                className='bg-neutral py-5 rounded-tr-xl border-t-1 border-t-black shadow-superior'
                
                style={styles}
                lockBackgroundScroll
            >
                <div className='flex flex-col'>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeSidebar}>✕</button>

                    <h2 className='text-center font-bold text-secondary mt-4 mb-2'>Categorias</h2>
                    <hr className='h-0 border-t-1' />

                    {
                        categoryCount.map(cat => (
                            <div key={cat.category} onClick={() => handleScrollToSection(`${cat.category.replace(/ /g, "_").toLocaleLowerCase()}`)} className='flex flex-col p-4 border-b border-b-secondary text-secondary'>
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