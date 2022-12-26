import Link from 'next/link'; 
import Head from 'next/head';
const Navbar = () => {
    return(
    <nav className="nav">
        <Head>
      <title>Hello World</title>
    </Head>
        <Link href="/posts/home" className="site-title"  >MyApp</Link>
        <ul >
            <li className="active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
            </li>               
                <li className="active">
                <Link href="/posts/list" className="nav-link">List</Link>
            </li>
        </ul>
    </nav>
    )   
}
export default Navbar