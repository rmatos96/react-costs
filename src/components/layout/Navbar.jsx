import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/costs_logo.png'
import Container from './Container'


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-[#222] p-4 px-14'>
          <Link to={'/home'}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className='flex items-center '>
            <li className='mr-4 text-[#fff] hover:text-[#ffbb33] transition-colors duration-300'>
              <Link to={'/home'}>Home</Link>
            </li>

            <li className='mr-4 text-[#fff] hover:text-[#ffbb33] transition-colors duration-300'>
              <Link to={'/projects'}>Projetos</Link>
            </li>

            <li className='mr-4 text-[#fff] hover:text-[#ffbb33] transition-colors duration-300'>
              <Link to={'/contact'}>Contato</Link>
            </li>

            <li className='mr-4 text-[#fff] hover:text-[#ffbb33] transition-colors duration-300'>
              <Link to={'/company'}>Empresa</Link>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar