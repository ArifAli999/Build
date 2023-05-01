import Image from 'next/image'
import { Inter } from 'next/font/google'
import getUser from '../../util/getUser'
import { useSession, signIn, signOut } from "next-auth/react"
import GuestLanding from '../../components/Layout/GuestLanding'
import UserLanding from '../../components/Layout/UserLanding'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session, status } = useSession()

  if (status === 'loading') return (
    <main
      className={`flex min-h-screen flex-col p-8 w-full items-center justify-between`}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <h2 className='text-2xl font-secondary text-black font-black'>Loading...</h2>
      </div>
    </main>
  )




  return (
    <main
      className={`flex min-h-screen flex-col p-8 w-full items-center justify-between`}
    >


      {session ? <UserLanding /> : <GuestLanding />}

    </main>
  )
}
