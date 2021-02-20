import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-around my-52 md:my-28'>

        <div className='text-center md:text-left'>
          <h1 className='font-bold text-6xl'>
            <span className='text-green-600'>Hey,</span> <br /> I'm Lucas Azevedo!
          </h1>
          <h2 className='text-3xl text-gray-500'>I'm a Front-End Developer</h2>
          <button className='px-6 py-4 mt-8 rounded font-bold text-white bg-green-600 hover:bg-green-500 transition'>Contact Me</button>
        </div>

        <img src='/images/lucas.jpg' className='hidden md:block w-2/5' /> 

      </div>
    </>
  )
}

export default Hero;