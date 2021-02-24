import React from 'react';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <Link href='https://linkedin.com/in/lucasbazev' className='block' >
      <a target='_blank' className='px-6 py-4 rounded font-bold text-white bg-green-600 hover:bg-green-500 transition'>
        Contact Me
      </a>
    </Link>
  )
}

export default ContactMe;