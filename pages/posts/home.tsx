import Link from "next/link"


export default function Home({posts}) {
    return(

      <div>
        <br />
    <center>
    <h2>Welcome to home page</h2>
    <h6>
        <Link className="link" href="/posts/register">--Not a user please register</Link>
      </h6>
      <h6>
      <Link className="link" href="/">--Need to update click here</Link>
      </h6>
      </center>
      <style jsx>{`
        h2{
          color: green;
        }
      `}</style>
      <br/>
       
    </div> ) 
     
  } 