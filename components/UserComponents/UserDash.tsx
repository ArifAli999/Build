import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import PrimaryButton from '../General/PrimaryButton';
import { useRouter } from 'next/router';
import ProfileBox from '../General/ProfileBox';
import usePageStore from '../../store/pagesStore';

function UserDash() {
  const { data: session } = useSession();
  const router = useRouter();
  const [input, setInput] = useState('');
  const [error, setError] = useState(false)
  const { userPages, setUserPages } = usePageStore();


  function handlePageCreation() {
    if (input.length > 0 && Object.keys(userPages).length === 0) {
      const pageObj = {
        pageName: input,
        pageId: `${input}-${session?.user?.name}`,
        pageOwner: session?.user?.name,
      }
      setUserPages(pageObj);
      console.log(userPages)
      router.push('/newPage');

    }
    if (input.length < 0) {
      setError(true)
    }
  }
  return (
    <div className='w-full h-full p-0 flex flex-col'>
      <div className=''>
        <p className='uppercase font-bold text-xl tracking-wider pl-2'>/Dashboard</p>
      </div>

      <div className='flex flex-col gap-4 mt-4  items-center min-h-[450px] justify-center rounded-md border border-black'>
        <div className='flex items-center flex-col justify-center'>
          <p className=' font-normal text-xl tracking-wider pl-6'>CLAIM YOUR PAGE </p>
          <div className='flex items-center gap-4'>
            <div className='flex mt-8 mb-8  rounded-md border border-black border-b-2 min-w-[75%] mx-auto gap-0 hover:border-b-4 transition-all duration-150 ease-linear '>
              <div className='bg-gray-300 h-full p-4 rounded-l-md border-r border-black font-poppins font-bold tracking-wider text-sm'>linkfree.com/</div>
              <div className='flex items-center pl-4 w-full '>
                <input className=' w-full h-full rounded focus:outline-none bg-transparent' placeholder='Claim your page'
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
            <PrimaryButton text='Claim your page' onClick={() => handlePageCreation()} />
          </div>
          <div className='flex items-center'>
            {error ? <p className='text-red-500'>Please fill the fields</p> : null}
          </div>

        </div>
      </div>



    </div>
  )
}

export default UserDash