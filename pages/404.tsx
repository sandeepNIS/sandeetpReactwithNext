import Link from "next/link"
export default function Custom404() {
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
      </div>
    )
  }