import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>
        <a>TierList</a>
      </Link>
    </nav>
  )
}

export default NavBar;