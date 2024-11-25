import { CartContext } from "../context/CartContext"
import MinusIcon from "../assets/svg/MinusIcon"
import PlusIcon from "../assets/svg/PlusIcon"
import TrashCanIcon from "../assets/svg/TrashCanIcon";
import { useContext, useState } from "react";

interface QuantityCounterProps {
    dishId: number;
    isIncluded: boolean;
    dishCantOnCart: number | undefined;
    setIsQuantityCounterVisible: React.Dispatch<React.SetStateAction<number | null>>;
    setIsQCVShown: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ dishId, isIncluded, dishCantOnCart, setIsQuantityCounterVisible, setIsQCVShown }) => {

    const { modifyDishQuantityOnCart } = useContext(CartContext);
    const [isBouncing, setIsBouncing] = useState<boolean>(false);

    const handleBounce = () => {
        setIsBouncing(true)
    }
    const handleBounceEnd = () => {
        setIsBouncing(false)
    }

    return (
        <>
            <button onClick={() => {

               if ( modifyDishQuantityOnCart(dishId, false, isIncluded)) {
                handleBounce();
 
               }
                if (dishCantOnCart === 1) {
                    setIsQCVShown(null)
                    setTimeout(() => setIsQuantityCounterVisible(null), 300);
                }
            }}>
                {
                    dishCantOnCart !== 1 ? <MinusIcon fillColor='#ffffff' /> : <TrashCanIcon />
                }
            </button>
            <span className={`mx-3 font-bold text-sm text-secondary text-center w-5 ${isBouncing ? 'animate-brinco' : ''}`} onAnimationEnd={handleBounceEnd}>
                {dishCantOnCart !== undefined ? dishCantOnCart : "0"}
            </span>
            <button onClick={() => {
                if (modifyDishQuantityOnCart(dishId, true, isIncluded)) {
                    handleBounce();
                    
                }
            }}>
                <PlusIcon fillColor='#ffffff' />
            </button>
        </>
    )
}

export default QuantityCounter