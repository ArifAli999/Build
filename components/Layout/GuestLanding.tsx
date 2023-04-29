import { signIn } from 'next-auth/react'
import React from 'react'
import Navigation from '../General/Navigation'

function GuestLanding() {
  return (
    <div className='flex flex-col w-full h-full gap-10 '>
        <Navigation/>


        <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
            <div className='flex items-center flex-col gap-2'>
                <h1 className='text-black font-bold   text-6xl  font-poppins leading-relaxed  '>
            All your platforms. One page.?
                </h1>
                <h2 className='text-gray-500 font-thin text-xl font-poppins'>Meet <span className='text-black underline underline-offset-4'>Linkfree.com</span>, a modern, lightning quick and forever free alternative! </h2>

            </div>

            <div className='flex items-center gap-6 mt-10'>
                <button className='bg-black text-white font-bold uppercase font-poppins p-3 rounded-md' onClick={() => signIn()}>Get Started</button>
                <button className='bg-white text-black font-bold uppercase font-poppins p-3 rounded-md'>Learn More</button>
            </div>
            
            </div>
    </div>
  )
}

export default GuestLanding