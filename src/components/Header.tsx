import LogoByHoursCircunvalar from "../assets/img/ByHoursCircunvalar.webp"
import LogoByHoursAstor from "../assets/img/ByHoursAstor.png"
import LogoByHoursChiquinquira from "../assets/img/ByHoursChiquinquira.png"
import LogoByHoursLasAmericas from "../assets/img/ByHoursLasAmericas.png"
import LogoCarpeDiem from "../assets/img/CarpeDiem.png"

interface HeaderProps {
  theme: string;
  hq: string;
}

const Header: React.FC<HeaderProps> = ({theme, hq}) => {
  return (
    <div className="grid place-items-center bg-neutral">
        <img src={
          theme === 'carpediem'? LogoCarpeDiem :
          hq === 'Circunvalar'? LogoByHoursCircunvalar :
          hq === 'Astor'? LogoByHoursAstor :
          hq === 'Chiquinquirá'? LogoByHoursChiquinquira :
          hq === 'Las Américas'? LogoByHoursLasAmericas :
          LogoByHoursCircunvalar 
        } alt="" width={200} className="py-6" />
    </div>
  )
}

export default Header