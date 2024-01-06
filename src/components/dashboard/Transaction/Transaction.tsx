"use client"
import Image from 'next/image'
import React from 'react'
import Tier from './Tier'





const Transaction = () => {

  const list = [
    {
      name: "John Doe",
      status: "Pending",
      date: "14.02.2024",
      amount: "3.200"
    },
    {
      name: "Robert Downey Jr.",
      status: "Done",
      date: "11.02.2024",
      amount: "4.100"

    },
    {

      name: "Miley Cyrus",
      status: "Done",
      date: "09.02.2024",
      amount: "2.700"
    },
    {
      name: "Justin Bieber",
      status: "Cancelled",
      date: "05.02.2024",
      amount: "10.400"

    }
  ]

  const getColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "yellow";
      case "Cancelled":
        return "red";
      case "Done":
        return "lime";
      default:
        return "#999";
    }
  };

  return (
    <div>
      <h2>Latest Transaction</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((ele, index) => (
            <Tier name={ele.name} amount={ele.amount} date={ele.date} key={index} status={ele.status} color={getColor(ele.status)}></Tier>

          ))}
        </tbody>
      </table>
    </div >
  )
}

export default Transaction