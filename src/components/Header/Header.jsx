'use client'

import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { useRouter } from 'next/navigation'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const router = useRouter()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex items-center space-x-1'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => router.push(item.slug)}
                className='px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='ml-2 border-l pl-2 border-slate-200'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header


