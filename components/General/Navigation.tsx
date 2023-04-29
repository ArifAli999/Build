import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'

function Navigation() {
    const {data: session} = useSession();
    const router = useRouter()

  return (
      <>
      {session ? (
          <nav className='border-2 border-b-4  border-black rounded-md h-14 w-full p-8  flex items-center justify-between'>
          <div className='flex items-center gap-8'>
              <p className='uppercase font-bold text-base tracking-wide text-white bg-black rounded-full p-3 h-10 w-10 flex items-center '>LF</p>
              <p className='uppercase font-bold text-base tracking-wider cursor-pointer' onClick={()=>router.push('/')}>Dashboard</p>
              <p className='uppercase font-bold text-base tracking-wider  cursor-pointer'>Pages</p>
              <p className='uppercase font-bold text-base tracking-wider  cursor-pointer'>Analytics</p>

          </div>

          <div className='flex items-center'>
          <button className=' font-poppins  uppercase font-bold text-base' 
     
              > {session?.user?.name}  </button>
          </div>
      </nav>
      ): (
        <nav className='border-2 border-b-4  border-black rounded-md h-14 w-full p-7  flex items-center justify-between'>
        <div className=''>
            <p className='uppercase font-bold text-base tracking-wider'>LINKFREE</p>

        </div>

        <div className='flex items-center'>
        <button className=' font-poppins  uppercase font-bold text-base' 
            onClick={() => signIn()}
            >Register </button>
            <p className='ml-2 mr-2'> | </p>
            <button className=' font-poppins  uppercase font-bold text-base' 
            onClick={() => signIn()}
            >Login</button>
        </div>
    </nav>
      )}
      </>
  )
}

export default Navigation