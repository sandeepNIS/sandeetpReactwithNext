import Link from 'next/link'; 
import Head from 'next/head';
import Styles from './navba.module.css'
// import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return(
    <nav className={Styles.nav}>
        <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
    </Head>
        <Link href="/" className={Styles.sitetitle}  >MyApp</Link>
        <ul className={Styles.ul}>
            <li className={Styles["active hover"]}>
            <Link href="/posts/register" className={Styles.a}>Register</Link> 
            </li>               
                <li className={Styles["active hover"]}>
                <Link href="/posts/home" className={Styles.a}>Home</Link>
            </li>
        </ul>
    </nav>
    )   
}
export default Navbar