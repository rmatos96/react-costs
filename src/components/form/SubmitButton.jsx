import React from 'react'

const SubmitButton = ({text}) => {
  return (
    <div >
        <button className='bg-[#222] py-[0.7em] px-[1.2em] transition-all cursor-pointer border-none rounded-md hover:text-[#ffbb33] duration-300'>
            {text}
        </button>
    </div>
  )
}

export default SubmitButton