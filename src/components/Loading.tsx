// import ByHoursLoading from "../assets/other/byhours_loading.gif"
// import CarpediemLoading from "../assets/other/carpediem_loading.gif"

import ByHoursLogo from "../assets/svg/ByHoursLogo";
import CarpeDiemLogo from "../assets/svg/CarpeDiemLogo";

interface LoadingComponent {
    theme: string;
}

const Loading: React.FC<LoadingComponent> = ({ theme }) => {

    // if (theme === 'carpediem') {
    //     return (
    //         <div className="flex flex-col justify-center mx-8 h-lvh">
    //             <div className="flex justify-center mb-3">
    //                 <img src={CarpediemLoading} alt="" width={200} className="py-6" />
    //             </div>

    //             <h1 className="uppercase font-bold text-xl text-secondary text-center">Cargando</h1>
    //         </div>
    //     )
    // } else if (theme === 'byhours') {
    //     return (
    //         <div className="flex flex-col justify-center mx-8 h-lvh">
    //             <div className="flex justify-center mb-3">
    //                 <img src={ByHoursLoading} alt="" width={200} className="py-6" />
    //             </div>

    //             <h1 className="uppercase font-bold text-xl text-secondary text-center">Cargando</h1>
    //         </div>
    //     )
    // }

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
            {/* <div className="flex justify-center mb-3">
                <img src={theme === 'carpediem' ? CarpediemLoading : ByHoursLoading} alt="" width={200} className="py-6" />
            </div> */}

            <h1 className="uppercase font-bold text-xl text-secondary text-center mt-16">Cargando</h1>
        </div>
    )
}

export default Loading