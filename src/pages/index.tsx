import Image from 'next/image'
import { Inter } from 'next/font/google'
import getUser from '../../util/getUser'
import { useSession, signIn, signOut } from "next-auth/react"
import GuestLanding from '../../components/Layout/GuestLanding'
import UserLanding from '../../components/Layout/UserLanding'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession()




  return (
    <main
      className={`flex min-h-screen flex-col p-8 w-full items-center justify-between`}
    >


      {session ? <UserLanding /> : <GuestLanding />}

    </main>
  )
}
