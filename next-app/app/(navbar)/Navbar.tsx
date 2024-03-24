import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-5 items-center'>
      <h1 className='md:text-2xl text-xs'><Link href={'/'}>NextAPP.</Link></h1>
      <div className='flex items-center'>
        <ul className='flex md:gap-10 gap-4 md:text-base sm:text-xs text-[0.6rem]'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            <li><Link href={'/studentlist'}>Student List</Link></li>
            <li><Link href={'/study'}>Study</Link></li>
        </ul>
        <Link href={'/login'} className='bg-slate-600 p-2 rounded-md md:ml-5 ml-3 md:text-base sm:text-xs text-[0.6rem] font-semibold'><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar
