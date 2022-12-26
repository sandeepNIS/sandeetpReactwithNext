// import '../styles/globals.css'
import '../styles/index.css'
import { AppProps } from 'next/app'
import Navbar from '../components/navbar'
// import Navbar from '../components/inexo'


export default function App({ Component, pageProps }:AppProps) {
  return (
<>
<Navbar/>
  <Component {...pageProps} />
  </>
  )
}
