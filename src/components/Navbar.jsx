import React from 'react'
import FurBall from '../assets/images/FurBall.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-2 justify-between text-white bg-blue-600'>
      <div className='flex justify-start'>
        <img src={FurBall} alt="logo" className='m-4 w-24 lg:w-40'/>
        <span className='flex place-items-center text-2xl lg:text-4xl'>Meow Jobs</span>  
      </div>
      <div className='flex justify-end gap-4 mr-20 place-items-center text-2xl lg:text-4xl'>
        <a href="">Home</a>
        <a href="">Jobs</a>
        <a href="">Add Job</a>
      </div>
    </div>
  )
}

export default Navbar