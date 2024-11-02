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