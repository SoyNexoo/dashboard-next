import React from 'react'
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md';
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
const menuList = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      }
    ]
  }
]
const SideBar = () => {
  return (
    <div className='sticky'>
      <div className='flex items-center gap-[20px] mb-[20px]'>
        <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt="" width="50" height="50" className="rounded-full object-cover"></Image>
        <div className='flex flex-col'>
          <span className='font-bold'>John Doe</span>
          <span className='text-stone-200 text-xs'>Administrator</span>
        </div>
      </div>
      <ul>
        {menuList.map((ele, index) => (
          <li key={index}>
            <p className="text-stone-200 text-xs font-bold my-3">{ele.title}</p>
            {ele.list.map((item, index) => (
              <MenuLink title={item.title} path={item.path} key={index} icon={item.icon}></MenuLink>
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 flex items-center gap-2 hover:bg-[#4f5f7e] rounded cursor-pointer w-full my-2">
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default SideBar