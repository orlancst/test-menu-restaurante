import MinusIcon from "../assets/svg/MinusIcon"
import PlusIcon from "../assets/svg/PlusIcon"

const QuantityCounter: React.FC = () => {
    return (
        <>
            <button>
                <MinusIcon fillColor='#ffffff' />
            </button>
            <span className="mx-5 font-bold text-sm text-secondary">1</span>
            <button>
                <PlusIcon fillColor='#ffffff' />
            </button>
        </>
    )
}

export default QuantityCounter