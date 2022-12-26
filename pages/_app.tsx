
import '../styles/index.css'
import '../styles/table.css'
import { AppProps } from 'next/app'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }:AppProps) {
  return (
<>
<Navbar/>
  <Component {...pageProps} />
  </>
  )
}
