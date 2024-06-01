import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to, text}) => {
  return (
    <Link className='bg-[#222] text-[#fff] py-2 px-4 transition hover:text-[#ffbb33] duration-300' to={to}>
        {text}
    </Link>
  )
}

export default LinkButton