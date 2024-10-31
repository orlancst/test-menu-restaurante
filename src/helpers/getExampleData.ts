import data from "../data/data.json"
import { Plato } from "../types";



export const askForData = (): Promise<Plato[]> => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data as Plato[])
        }, 100);
    })
}