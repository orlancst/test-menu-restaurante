import LogoByHoursCircunvalar from "../assets/img/ByHoursCircunvalar.webp"
import LogoByHoursAstor from "../assets/img/ByHoursAstor.png"
import LogoByHoursChiquinquira from "../assets/img/ByHoursChiquinquira.png"
import LogoByHoursLasAmericas from "../assets/img/ByHoursLasAmericas.png"
import LogoCarpeDiem from "../assets/img/CarpeDiem.png"
import { ThemeAndHQ } from "../types"

const Header: React.FC<ThemeAndHQ> = ({ theme, hq }) => {
  return (
    <div className="flex flex-col items-center bg-neutral py-3">
      <img src={
        theme === 'carpediem' ? LogoCarpeDiem :
          hq === 'Circunvalar' ? LogoByHoursCircunvalar :
            hq === 'Astor' ? LogoByHoursAstor :
              hq === 'Chiquinquirá' ? LogoByHoursChiquinquira :
                hq === 'Las Américas' ? LogoByHoursLasAmericas :
                  LogoByHoursCircunvalar
      } alt="" width={
        theme === 'carpediem' ? 100 : 200
      } className="py-2" />

      {
        theme === 'carpediem' ?
          <h1 className="font-bold text-secondary text-2xl">{hq.toUpperCase()}</h1>
          : ''
      }
    </div>
  )
}

export default Header