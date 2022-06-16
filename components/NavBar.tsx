import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className='flex justify-between bg-black font-bold text-white mx-auto'>
        <div className='flex items-center px-3 py-4'>
          <Link href='/'>
            <a className='mx-5 text-2xl font-black'>TierList</a>
          </Link>
          <Link href='/'>
            <a className=''>카테고리</a>
          </Link>
        </div>
        <div className='flex space-x-5 items-center px-3 py-4 mx-5'>
          <Link href='/'>
            <a className=''>로그인</a>
          </Link>
          <Link href='/'>
            <a className=''>회원가입</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;