import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NetworkSign from "../components/networkSign"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NetworkSign/>
    </>
  )
}

export default MyApp