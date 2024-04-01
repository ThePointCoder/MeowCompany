import React from 'react'

const Hero = ({
    title = "Become a Meow Dev",
    subTitle = "Find the Meow jobs that fits your skills and needs"
}) => {
  return (
    <div className='text-center text-white bg-blue-600 p-24'>
        <h1 className='text-6xl lg:text-8xl'>{title}</h1>
        <p className='text-xl lg:text-3xl mt-4'>{subTitle}</p>
    </div>
  )
}

export default Hero