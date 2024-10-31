import MenuIcon from "../assets/svg/MenuIcon"
import SearchIcon from "../assets/svg/SearchIcon"

const Navbar:React.FC = () => {
    return (
        <div className="flex flex-row mx-4 gap-x-0 py-3">
            <div className="basis-1/3 border-t-2 border-b-2 flex items-center">
                <MenuIcon fillColor="#ff5800" />
                <SearchIcon fillColor="#ff5800" />
            </div>
            <div className="basis-1/3 flex justify-center text-xl font-bold font-montserrat text-primary border-t-2 border-b-2 border-b-primary">
                MENÚ
            </div>
            <div className="basis-1/3 border-t-2 border-b-2">

            </div>
        </div>
    )
}

export default Navbar