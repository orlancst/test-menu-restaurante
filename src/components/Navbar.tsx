import React from "react"
import MenuIcon from "../assets/svg/MenuIcon"
import { NavbarProps } from "../types"

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, theme }) => {

    return (
        <div className="sticky top-0 w-full flex flex-row px-4 gap-x-0 py-3 bg-accent z-[100]">
            <div className="basis-1/3 border-t-2 border-b-2 flex items-center">

                <button onClick={toggleSidebar}>
                    <MenuIcon fillColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} />
                </button>
            </div>
            <div className="basis-1/3 flex justify-center text-lg leading-none py-1 font-bold text-primary border-t-2 border-b-2 border-b-primary">
                MENÚ
            </div>
            <div className="basis-1/3 border-t-2 border-b-2">

            </div>
        </div>
    )
}

export default Navbar