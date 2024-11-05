interface SvgFile {
    strokeColor: string;
}

const LeftArrowIcon: React.FC<SvgFile> = ({ strokeColor }) => {
    return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L22 11M2 11L10.5714 2M2 11L10.5714 20" stroke={strokeColor} stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default LeftArrowIcon