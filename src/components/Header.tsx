import LogoByHoursCircunvalar from "../assets/img/ByHoursCircunvalar.webp"

const Header: React.FC = () => {
  return (
    <div className="grid place-items-center bg-neutral">
        <img src={LogoByHoursCircunvalar} alt="" width={200} className="py-6" />
    </div>
  )
}

export default Header