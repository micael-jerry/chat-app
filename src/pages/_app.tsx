import { NavBar } from '@/components/NavBar'
import '@/styles/bootstrap.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
