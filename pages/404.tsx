
import Image from 'next/image'


// export async function getStaticProps() {
//   // const allPostsData = getSortedPostsData();
//   const res = await fetch(`https://b6a4-119-82-104-94.in.ngrok.io/account/list`)
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