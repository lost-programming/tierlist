import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className='flex mx-auto font-bold text-white bg-black justify-between'>
        <div className='flex px-3 py-4 items-center'>
          <Link href='/'>
            <a className='mx-5 font-black text-2xl'>TierList</a>
          </Link>
          <Link href='/'>
            <a className=''>카테고리</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
