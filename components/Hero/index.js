import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-around my-52 md:my-28'>

        <div className='text-center md:text-left'>
          <h1 className='font-bold text-6xl'>
            <span className='text-green-600'>Hey,</span> <br /> I'm Lucas Azevedo!
          </h1>
          <h2 className='text-3xl text-gray-500 mb-8'>I'm a Front-End Developer</h2>
          <Link href='https://linkedin.com/in/lucasbazev' className='block' >
            <a target='_blank' className='px-6 py-4 rounded font-bold text-white bg-green-600 hover:bg-green-500 transition'>
              Contact Me
            </a>
          </Link>
        </div>

        <img src='/images/lucas.jpg' className='hidden md:block w-2/5' /> 

      </div>
    </>
  )
}

export default Hero;