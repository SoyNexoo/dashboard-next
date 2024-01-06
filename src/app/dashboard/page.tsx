import Card from '@/components/dashboard/Card'
import Chart from '@/components/dashboard/Chart'
import RightBar from '@/components/dashboard/RightBar'
import Transaction from '@/components/dashboard/Transaction/Transaction'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex gap-5 mt-5'>
      <div className="flex-[3] flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard