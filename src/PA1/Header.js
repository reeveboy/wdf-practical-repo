import React from 'react'

function Header({heading}) {
  return (
    <div className='flex justify-center'>
        <div className='text-3xl text-center font-bold'>{heading}</div>
        <p className="p-1"></p>
        <img className='max-h-[40px] max-w-[40px]' src="instagram.png" alt="" />
    </div>
  )
}

export default Header