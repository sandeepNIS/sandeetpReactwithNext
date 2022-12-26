import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '..';
export default function Home() {
    return(
      <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        
        <Link href="/posts/home" className="navbar-brand">MyApp</Link>
        <ul className='navbar-nav'>
            <li className="nav-item active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
                </li>
                <li className='nav-item '>
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