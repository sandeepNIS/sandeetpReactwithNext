// import '../styles/index.css'
import '../styles/table.css'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navba';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import Script from 'next/script';
// import UnsavedChangesWarning from '../components/promptComponent';
export default function App({ Component, pageProps }:AppProps) {
  return (
<Provider store={store}>
<Head>
<script src="C:/react-next-app/todoapp/components/prompt.js" />
  <title>Hello world</title>
<link rel="shortcut icon" href="/favi.ico" />
</Head>

<Navbar/>
  <Component {...pageProps} />
  </Provider>
  )
}