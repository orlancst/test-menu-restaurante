interface SvgFile {
    stroke: string;
}

const EditCommentIcon: React.FC<SvgFile> = ({ stroke }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
            <path d="M2.23527 2.64716H1.82351C1.6051 2.64716 1.39564 2.73392 1.2412 2.88836C1.08676 3.0428 1 3.25226 1 3.47067V7.17647C1 7.39488 1.08676 7.60434 1.2412 7.75878C1.39564 7.91322 1.6051 7.99998 1.82351 7.99998H5.52931C5.74772 7.99998 5.95719 7.91322 6.11162 7.75878C6.26606 7.60434 6.35283 7.39488 6.35283 7.17647V6.76471" stroke={stroke} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.94113 1.82368L7.1764 3.05895M7.74668 2.47631C7.90885 2.31414 7.99995 2.09419 7.99995 1.86485C7.99995 1.63551 7.90885 1.41556 7.74668 1.2534C7.58451 1.09123 7.36456 1.00012 7.13522 1.00012C6.90588 1.00012 6.68593 1.09123 6.52376 1.2534L3.05884 4.70597V5.94124H4.29411L7.74668 2.47631Z" stroke={stroke} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default EditCommentIcon