"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
  const pathName = usePathname()
  return (
    <div className=''>
      <div>{pathName}</div>
    </div>
  )
}

export default NavBar