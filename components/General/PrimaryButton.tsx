import React from 'react'

function PrimaryButton({text, onClick } : {text: string, onClick?: any}) {
  return (
    <button className='border-2 border-black border-b-4 whitespace-nowrap text-black font-bold uppercase font-secondary p-3 rounded-xl hover:cursor-pointer transition-all duration-150 hover:border-b-8'
    onClick={onClick}
    >{text} </button>
  )
}

export default PrimaryButton