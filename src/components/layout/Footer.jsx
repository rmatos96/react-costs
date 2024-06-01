import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#222] p-10 text-center'>
      <ul className='flex justify-center gap-4 items-center'>
        <li className='hover:text-[#ffbb33] cursor-pointer transition-colors duration-200'>
          <FaFacebook size={24}/>
        </li>
        <li className='hover:text-[#ffbb33] cursor-pointer transition-colors duration-200'>
          <FaInstagram size={24}/>
        </li>
        <li className='hover:text-[#ffbb33] cursor-pointer transition-colors duration-200'>
          <FaLinkedin size={24}/>
        </li>
      </ul>
      <p className='mt-8'>
        <span className='font-bold text-[#ffbb33]'>
          Costs 
        </span>
        <span className='ml-1.5'>&copy; 2024</span>
      </p>
    </footer>
  )
}

export default Footer