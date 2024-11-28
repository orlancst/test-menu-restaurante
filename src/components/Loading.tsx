import ByHoursLogo from "../assets/svg/ByHoursLogo";
import CarpeDiemLogo from "../assets/svg/CarpeDiemLogo";
import { Theme } from "../types";

const Loading: React.FC<Theme> = ({ theme }) => {

    return (
        <div className="flex flex-col justify-center mx-8 h-lvh">
            <div className="relative w-full grid place-items-center">
                <div id="loader" className={`${theme === 'carpediem' ? '' : '__byhours_loading'}`}></div>
                {
                    theme === 'carpediem' ?
                    <CarpeDiemLogo /> :
                    <ByHoursLogo />

                }
            </div>

            <h1 className="uppercase font-bold text-xl text-secondary text-center mt-16">Cargando</h1>
        </div>
    )
}

export default Loading