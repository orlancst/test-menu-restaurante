interface SvgFile {
    fillColor: string;
}

const MenuIcon: React.FC<SvgFile> = ({ fillColor }) => {
    return (
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
            <path d="M1.44444 7.8C2.23889 7.8 2.88889 7.215 2.88889 6.5C2.88889 5.785 2.23889 5.2 1.44444 5.2C0.65 5.2 0 5.785 0 6.5C0 7.215 0.65 7.8 1.44444 7.8ZM1.44444 13C2.23889 13 2.88889 12.415 2.88889 11.7C2.88889 10.985 2.23889 10.4 1.44444 10.4C0.65 10.4 0 10.985 0 11.7C0 12.415 0.65 13 1.44444 13ZM1.44444 2.6C2.23889 2.6 2.88889 2.015 2.88889 1.3C2.88889 0.585 2.23889 0 1.44444 0C0.65 0 0 0.585 0 1.3C0 2.015 0.65 2.6 1.44444 2.6ZM7.22222 7.8H24.5556C25.35 7.8 26 7.215 26 6.5C26 5.785 25.35 5.2 24.5556 5.2H7.22222C6.42778 5.2 5.77778 5.785 5.77778 6.5C5.77778 7.215 6.42778 7.8 7.22222 7.8ZM7.22222 13H24.5556C25.35 13 26 12.415 26 11.7C26 10.985 25.35 10.4 24.5556 10.4H7.22222C6.42778 10.4 5.77778 10.985 5.77778 11.7C5.77778 12.415 6.42778 13 7.22222 13ZM5.77778 1.3C5.77778 2.015 6.42778 2.6 7.22222 2.6H24.5556C25.35 2.6 26 2.015 26 1.3C26 0.585 25.35 0 24.5556 0H7.22222C6.42778 0 5.77778 0.585 5.77778 1.3ZM1.44444 7.8C2.23889 7.8 2.88889 7.215 2.88889 6.5C2.88889 5.785 2.23889 5.2 1.44444 5.2C0.65 5.2 0 5.785 0 6.5C0 7.215 0.65 7.8 1.44444 7.8ZM1.44444 13C2.23889 13 2.88889 12.415 2.88889 11.7C2.88889 10.985 2.23889 10.4 1.44444 10.4C0.65 10.4 0 10.985 0 11.7C0 12.415 0.65 13 1.44444 13ZM1.44444 2.6C2.23889 2.6 2.88889 2.015 2.88889 1.3C2.88889 0.585 2.23889 0 1.44444 0C0.65 0 0 0.585 0 1.3C0 2.015 0.65 2.6 1.44444 2.6ZM7.22222 7.8H24.5556C25.35 7.8 26 7.215 26 6.5C26 5.785 25.35 5.2 24.5556 5.2H7.22222C6.42778 5.2 5.77778 5.785 5.77778 6.5C5.77778 7.215 6.42778 7.8 7.22222 7.8ZM7.22222 13H24.5556C25.35 13 26 12.415 26 11.7C26 10.985 25.35 10.4 24.5556 10.4H7.22222C6.42778 10.4 5.77778 10.985 5.77778 11.7C5.77778 12.415 6.42778 13 7.22222 13ZM5.77778 1.3C5.77778 2.015 6.42778 2.6 7.22222 2.6H24.5556C25.35 2.6 26 2.015 26 1.3C26 0.585 25.35 0 24.5556 0H7.22222C6.42778 0 5.77778 0.585 5.77778 1.3Z" fill={fillColor} />
        </svg>

    )
}

export default MenuIcon