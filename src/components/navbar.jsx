import Link from 'next/link';
export default function Header() {
  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

        </div>
        <Link href="/home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="register" className="btn">
          <button className="btn btn-outline">Register</button>
        </Link>
        <Link href="/newbook" className="btn">
          <button className="btn btn-outline">Add Book</button>
        </Link>
      </div>
    </div>
  )
}