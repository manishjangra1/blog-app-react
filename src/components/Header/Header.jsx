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
    <header className='py-3 shadow bg-white border-b'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link href='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto space-x-2'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => router.push(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-medium'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
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

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak
