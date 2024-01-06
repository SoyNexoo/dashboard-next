"use client"
import Image from 'next/image'
import React from 'react'
const Transaction = () => {

  return (
    <div className='bg-[#272c33] p-4'>
      <h2 className='text-[2rem] font-light'>Latest Transaction</h2>
      <table className='w-full  border-separate [border-spacing:0.75rem] '>
        <thead>
          <tr>
            <td className='font-bold'>Name</td>
            <td className='font-bold'>Status</td>
            <td className='font-bold'>Date</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        <tbody className="">
          <tr >
            <td className='flex items-center gap-3'>
              <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt='' width={40} height={40} className='rounded-full object-cover' />
              John Doe
            </td>
            <td>
              <span className={`text-[#FFD97D]`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr >
            <td className='flex items-center gap-3'>
              <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt='' width={40} height={40} className='rounded-full object-cover' />
              Robert Downey Jr.
            </td>
            <td>
              <span className={`text-[#77E192]`}>Done</span>
            </td>
            <td>28.01.2024</td>
            <td>$1.700</td>
          </tr>
          <tr >
            <td className='flex items-center gap-3'>
              <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt='' width={40} height={40} className='rounded-full object-cover' />
              Miley Cyrus
            </td>
            <td>
              <span className={`text-[#EE6055]`}>Cancelled</span>
            </td>
            <td>21.01.2024</td>
            <td>$18.000</td>
          </tr>
          <tr >
            <td className='flex items-center gap-3'>
              <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt='' width={40} height={40} className='rounded-full object-cover' />
              Justin Bieber
            </td>
            <td>
              <span className={`text-[#77E192]`}>Done</span>
            </td>
            <td>04.01.2024</td>
            <td>$6.100</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

export default Transaction