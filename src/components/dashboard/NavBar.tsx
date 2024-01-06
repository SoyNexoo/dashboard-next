"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const NavBar = () => {
  const [focused, setFocused] = useState(false)
  const pathName = usePathname()
  return (
    <div className='flex justify-between items-center p-5  rounded-xl bg-[#272c33]'>
      <div className="text-stone-200 font-bold capitalize">{pathName.split("/").pop()}</div>
      {/* Menu */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className={`flex items-center gap-3 py-2 px-3 rounded-full ${focused ? "bg-[#425070]" : "bg-[#2e374a]"}`}>
          <MdSearch></MdSearch>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="text"
            className="bg-transparent focus:outline-none"
            placeholder="Search..." />
        </div>

        {/* Icons */}
        <div className="flex gap-2">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default NavBar