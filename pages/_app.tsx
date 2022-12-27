
// import '../styles/index.css'
import '../styles/table.css'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navba';
import Head from 'next/head';

export default function App({ Component, pageProps }:AppProps) {
  return (
<>
<Head>
  <title>Hello world</title>
<link rel="shortcut icon" href="/favi.ico" />
</Head>
<Navbar/>
  <Component {...pageProps} />
  </>
  )
}
