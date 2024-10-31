
const CartSummary: React.FC = () => {
  return (
    <div className="sticky bottom-0 z-10 bg-neutral p-5 rounded-t-xl border-t-1 border-t-black shadow-superior">
        <div className="flex flex-row justify-center gap-x-5 font-montserrat">
            <div className="flex flex-col">
                <span className="text-sm">1 producto</span>
                <span className="font-semibold text-xl text-secondary">$ 80.000</span>
            </div>
            <button className="btn rounded-full px-6 bg-primary text-secondary font-bold">Ver mi pedido</button>
        </div>
    </div>
  )
}

export default CartSummary