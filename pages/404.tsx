import Link from "next/link"

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const res = await fetch(`http://localhost:3080/account/list`)
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Custom404({ posts }) {
    return (
      <div>
        <center>
    <h2 >404 - Page Not Found please enter correct url</h2>
    </center>
    <style jsx>{`
        h2{
          color: red;
        }
      `}</style>
      <Link className="link" href="/api/trivia/8">--Number 8 trivia</Link>
      <br/>
      <h5>Number of users present are</h5>
      <ul >
      {posts.map(({ id, username, email}) => (
            <li  key={id}>
              {username}
              <br />
              {email}
            </li>
          ))}
        </ul>
        
	
      </div>
    )
  }