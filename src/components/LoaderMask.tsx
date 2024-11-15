import React from 'react'

interface LoaderMaskProps {
  loaderMsj: string;
}


const LoaderMask:React.FC<LoaderMaskProps> = ({loaderMsj}) => {
  return (
    <div className='fixed z-50 bg-[#00000069] w-full h-lvh text-center flex items-center justify-center gap-x-3 overflow-y-hidden'>
        <h3 className='font-semibold text-2xl'>{loaderMsj} </h3>
        <span className="loading loading-spinner loading-md"></span>
    </div>
  )
}

export default LoaderMask