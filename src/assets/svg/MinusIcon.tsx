interface SvgFile {
    fillColor: string;
}

const MinusIcon: React.FC<SvgFile> = ({fillColor}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="4" viewBox="0 0 15 4" fill="none">
            <line x1="2.1521" y1="2.19556" x2="12.7173" y2="2.19556" stroke={fillColor} strokeWidth="3" strokeLinecap="round" />
        </svg>

    )
}

export default MinusIcon