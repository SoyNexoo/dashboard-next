"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
interface props {
  icon: any;
  path: string;
  title: string
}

const MenuLink = ({ icon, path, title }: props) => {
  const pathName = usePathname()
  return (
    <Link href={path} className={`p-5 flex items-center gap-2 hover:bg-[#7d8fb1] rounded ${pathName === path && 'bg-[#7d8fb1]'}`}>
      {icon}
      {title}
    </Link>
  )
}

export default MenuLink