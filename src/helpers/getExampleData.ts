import data from "../data/data.json"
import { Plato } from "../types";



export const askForData = (): Promise<Plato[]> => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data as Plato[])
        }, 100);
    })
}

export const askForItem = (id: number) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((item) => item.id === id);
        if (id !== 0 && item) {
            resolve(item);
        } else {
            reject(new Error(`No se encontró el producto con la id "${id}"`));
        }
    })
}