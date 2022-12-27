import Link from "next/link"

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3080/account/list`)
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
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
      <h6>Number of users REGISTERED </h6>
          <ol typeof="number" >
      {posts.map(({ id, username,email}) => (
            <li  key={id}>
             <p>{username} ----{email}</p> 
            </li>
          ))} 
        </ol>
       
    </div> ) 
     
  } 