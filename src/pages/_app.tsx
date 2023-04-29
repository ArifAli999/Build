import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { useState, useEffect } from 'react';

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);




  if (isSSR) return null;


  return (
    <SessionProvider session={session}>
      <Component {...pageProps} suppressHydrationWarning />
    </SessionProvider>
  )
}