import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

interface CartSummaryProps {
  theme: string;
  cantidad: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({theme, cantidad}) => {
  
  const { cartTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const { search } = useLocation()

  const goToCart = () => {
    navigate(`/cart${search}`);
  }

  return (
    <div className="sticky bottom-0 z-10 bg-neutral p-5 rounded-t-xl border-t-1 border-t-black shadow-superior">
        <div className="flex flex-row justify-center gap-x-5">
            <div className="flex flex-col">
                <span className="text-sm text-secondary">{cantidad} producto{cantidad !== 1 ? 's' : ''}</span>
                <span className="font-semibold text-xl text-secondary">$ {cartTotalPrice().toLocaleString('es-ES')}</span>
            </div>
            <button className="btn rounded-full px-6 bg-primary text-secondary font-bold" onClick={goToCart}>Ver mi pedido</button>
        </div>
    </div>
  )
}

export default CartSummary