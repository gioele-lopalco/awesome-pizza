'use client'

import Link from 'next/link'
import { ReactElement } from 'react'

const Navbar = (): ReactElement => {
  return (
    <div className='navbar'>
      <Link href='/customer' className='nav-link'>Customer Page</Link>
      <Link href='/pizza-chef' className='nav-link'>Pizza Chef Page</Link>
    </div>
  )
}

export default Navbar
