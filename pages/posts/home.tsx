import Link from "next/link"
export default function Home() {
    return(

      <div>
        <br />
    <center>
    <h2>Welcome to home page</h2>
    </center>
    <h4>
        <Link className="link" href="/">--back to List</Link>
      </h4>
      <style jsx>{`
        h2{
          color: green;
        }
      `}</style>
              
    </div> ) 
     
  } 