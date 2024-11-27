import { CartUser } from "../types";

export const shortenParagraph = (texto: string, maxLength: number) => {
    if (texto.length <= maxLength) {
        return texto;
    }

    let textoCortado = texto.substr(0, maxLength);

    const ultimoEspacio = textoCortado.lastIndexOf(" ");

    if (ultimoEspacio !== -1) {
        textoCortado = textoCortado.substr(0, ultimoEspacio);
    }

    return textoCortado + "...";
}

export const adaptCartReq = (cart:Array<CartUser>) => {
    return cart.map((item) => (item.comentario ? {
        id: item.id,
        quantity: item.cantidad,
        comments: item.comentario,
        price: item.price,
    }: {
        id: item.id,
        quantity: item.cantidad,
        price: item.price,
    } ));
}

export const expireCart = (days:number = 0, hours: number = 0, minutes:number = 0, seconds: number = 0):number => {

    const miliseconds = (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)

    return Date.now() + miliseconds;
}