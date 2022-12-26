import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '..';
export default function Home() {
    return(
      <div>
      <div>
      <nav className="nav">
        
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
    
    </div>
      <br />
    <center>
    <h2>Welcome to home page</h2>
    </center>
    </div> ) 
     
  }