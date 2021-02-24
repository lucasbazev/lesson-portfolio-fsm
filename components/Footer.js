import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-col mb-8 text-sm text-center text-gray-600'>
      <p>This is a practicing project</p>

      <Link href='https://github.com/lucasbazev/lesson-portfolio-fsm'>
        <a target='_blank' className='hover:text-green-600 transition'>You can find the source code here</a>
      </Link>

      <Link href='https://linkedin.com/in/lucasbazev'>
        <a target='_blank' className='hover:text-green-600 transition'>Designed and Built by Lucas Azevedo</a>
      </Link>
    </div>
  )
}

export default Footer;