
import Image from 'next/image'


// export async function getStaticProps() {
//   // const allPostsData = getSortedPostsData();
//   const res = await fetch(`http://localhost:3080/account/list`)
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }


export default function Custom404() {
    return (
      <div>
        <center>
    <h2 >404 - Page Not Found please enter correct url</h2>
    <Image
    src="/errorImg.png"
        alt="Picture of the author"
        width={200}
        height={200}
        />
    </center>
    <style jsx>{`
        h2{
          color: red;
        }
      `}</style>

        
	
      </div>
    )
  }