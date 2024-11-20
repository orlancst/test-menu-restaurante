
interface SvgFile {
    fillColor: string;
}
const PlusIcon: React.FC<SvgFile> = ({fillColor}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M12.5962 7.75155C12.8532 7.75155 13.0997 7.64947 13.2814 7.46776C13.4631 7.28604 13.5652 7.03959 13.5652 6.78261C13.5652 6.52563 13.4631 6.27917 13.2814 6.09746C13.0997 5.91575 12.8532 5.81367 12.5962 5.81367L7.75152 5.81366L7.75152 0.968944C7.75152 0.711964 7.64944 0.465509 7.46772 0.283797C7.28601 0.102085 7.03956 -2.85244e-07 6.78258 -2.96477e-07C6.5256 -3.0771e-07 6.27914 0.102085 6.09743 0.283797C5.91572 0.465509 5.81363 0.711964 5.81363 0.968944L5.81363 5.81366L0.968913 5.81366C0.711933 5.81366 0.465478 5.91575 0.283765 6.09746C0.102053 6.27917 -3.0922e-05 6.52563 -3.09333e-05 6.78261C-3.09445e-05 7.03959 0.102053 7.28604 0.283765 7.46776C0.465478 7.64947 0.711933 7.75155 0.968913 7.75155L5.81363 7.75155L5.81363 12.5963C5.81363 12.8533 5.91572 13.0997 6.09743 13.2814C6.27914 13.4631 6.5256 13.5652 6.78258 13.5652C7.03956 13.5652 7.28601 13.4631 7.46772 13.2814C7.64944 13.0997 7.75152 12.8533 7.75152 12.5963L7.75152 7.75155L12.5962 7.75155Z" fill={fillColor}/>
</svg>

    )
}

export default PlusIcon