import React from 'react'

const Select = ({text, name, options, handleOnChange, value}) => {
  return (
    <div className='flex flex-col mb-[1em]'>
        <label className='mb-[.6em] font-bold' htmlFor={name}>{text}:</label>
        <select className='p-[.7em] rounded-md border-none placeholder:text-[#7b7b7b]' name={name} id={name}>
            <option>Selecione uma opção</option>
            {options.map((option) => 
                <option value={option.id} key={option.id}>{option.name}</option>
              )}
        </select>
    </div>
  )
}

export default Select