import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import UserDash from '../UserComponents/UserDash'
import Navigation from '../General/Navigation';

function UserLanding() {
    const {data: session} = useSession();

  return (
     <div className='flex flex-col w-full h-full gap-6 '>
          <Navigation/>


        <div className='flex flex-col items-center justify-center h-full w-full'>
            <UserDash/>
        </div>
        </div>
  )
}

export default UserLanding