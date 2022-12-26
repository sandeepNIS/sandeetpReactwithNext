import Link from 'next/link'; 
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return(
    <nav className="nav">
        <Head>
      <title>Hello World</title>
    </Head>
        <Link href="/" className="site-title"  >MyApp</Link>
        <ul >
            <li className="active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
            </li>               
                <li className="active">
                <Link href="/posts/home" className="nav-link">Home</Link>
            </li>
        </ul>
    </nav>
    )   
}
export default Navbar