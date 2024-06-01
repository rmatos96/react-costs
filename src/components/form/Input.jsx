import React from 'react'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
  return (
    <div className='flex flex-col mb-[1em]'>
        <label className='mb-[.6em] font-bold' htmlFor={name}>{text}:</label>
        <input className='p-[.7em] rounded-md border-none placeholder:text-[#7b7b7b]' 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
        />
            
    </div>
  )
}

export default Input