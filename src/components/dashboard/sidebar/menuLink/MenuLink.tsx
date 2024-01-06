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
    <Link href={path} className={`p-5 flex items-center gap-2 hover:bg-[#4f5f7e] rounded my-2 ${pathName === path && 'bg-[#4f5f7e]'}`}>
      {icon}
      {title}
    </Link>
  )
}

export default MenuLink