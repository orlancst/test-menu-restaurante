import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { askForData } from "../helpers/getExampleData";
import { Plato } from "../types";

type Theme = 'byhours' | 'carpediem' | 'light'

const Testing: React.FC = () => {

    const location = useLocation();
    const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme ) ?? 'light')

    const [prods, setProds] = useState<Plato[]>([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const sede = queryParams.get('sede') as Theme;

        const validThemes: Theme[] = [
            'byhours',
            'carpediem'
        ]

        let newTheme: Theme = theme

        if (sede && validThemes.includes(sede)) {
            newTheme = sede
            localStorage.setItem('theme', sede)
        } else if (localStorage.getItem('sede')) {
            newTheme = (localStorage.getItem('sede') as Theme ) ?? 'light'
        }


        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme);
        

    }, [location.search])

    useEffect(() => {
        askForData()
            .then((res) => {
                setProds(res)
            })
    }, [])

    return (
        <div>

            <h1 className="text-3xl font-extrabold text-primary font-montserrat">
                SEDE: {theme}
            </h1>

            <div className="font-montserrat">
                {
                    prods.map((prod) => (
                        <p key={prod.id}>
                            {prod.plato}
                        </p>
                    ))
                }
            </div>

        </div>
    )
}

export default Testing