import React from 'react'
import PrimaryButton from './PrimaryButton'

function ProfileBox() {
  return (

    <div className='flex mt-8 mb-8 bg-transparent rounded-md border border-black border-b-2 min-w-[75%] mx-auto gap-0 hover:border-b-4 transition-all duration-150 ease-linear '>
      <div className='bg-gray-300 h-full p-4 rounded-l-md border-r border-black font-poppins font-bold tracking-wider text-sm'>linkfree.com/</div>
      <div className='flex items-center pl-4 w-full bg-transparent '>
        <input className=' w-full h-full rounded focus:outline-none bg-transparent' placeholder='Claim your page' />
      </div>
    </div>


  )
}

export default ProfileBox