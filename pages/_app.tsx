
// import '../styles/index.css'
import '../styles/table.css'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navba';

export default function App({ Component, pageProps }:AppProps) {
  return (
<>
<Navbar/>
  <Component {...pageProps} />
  </>
  )
}
