import React from 'react'
import { LoaderMaskProps } from '../types';

const LoaderMask: React.FC<LoaderMaskProps> = ({ loaderMsj }) => {
  return (
    <div className='fixed z-50 bg-[#00000069] w-full h-lvh text-center flex items-center justify-center gap-x-3 overflow-y-hidden'>
      <h3 className='font-semibold text-2xl text-secondary'>{loaderMsj}</h3>
      <span className="loading loading-spinner loading-md"></span>
    </div>
  )
}

export default LoaderMask