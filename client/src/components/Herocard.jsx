import React from 'react'
import Search from './Search';

const Herocard = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mb-12' >
        <div className='text-[32px] md:text-[52px]  font-semibold leading-8  m-8 md:m-16'>Find movies on the go<span className='text-red1'>.</span></div>
    <div className='flex'>
      <img className='w-34 h-46 rounded-lg object-cover -ml-3.5 z-0 -rotate-8 mt-4' src="/naruto.jpg" alt='hero-image'></img>
      <img className='w-36 h-48 rounded-lg object-cover -ml-3.5 z-10' src="/Onepiece.png" alt='hero-image'></img>
      <img className='w-34 h-46 rounded-lg object-cover -ml-3.5 z-0 rotate-8 mt-4' src="/2.jpg" alt='hero-image'></img>
    </div>
    
    </div>
    </>
  )
}

export default Herocard;