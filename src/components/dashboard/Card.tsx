import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className="flex gap-5 p-4 bg-[#272c33] cursor-pointer hover:bg-[#425070] w-full">
      <MdSupervisedUserCircle size={24} />
      <div className="flex gap-5 flex-col">
        <span>Total Users</span>
        <span className="font-bold">10.723</span>
        <span><span className='text-[#77E192]'>12%</span> more than previous week</span>
      </div>
    </div>
  )
}

export default Card