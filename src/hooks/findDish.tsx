import { useState } from "react";
import { Dish } from "../types";


interface DishData {
    dataDish: Dish | null;
    errorDish: string | null;
    isDishLoading: boolean;
}


export const findDish = () => {

    const [dishState, setDishState] = useState<DishData>({
        dataDish: null,
        errorDish: null,
        isDishLoading: false,
    })


    const fetchDishData = async (idDish: number, endpointUrl: string) => {
        setDishState({...dishState, isDishLoading: true})

        try {
            const response = await fetch(`${endpointUrl}restaurants/menu/${idDish}`)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result: Dish = await response.json()
            setDishState({
                dataDish: result,
                errorDish: null,
                isDishLoading: false,
            })
        } catch (err: any) {
            setDishState({
                dataDish: null,
                errorDish: err.message,
                isDishLoading: false,
            })
        }
    }

    return { ...dishState, fetchDishData }

}