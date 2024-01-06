import Image from 'next/image';
import React from 'react'

interface Props {
  name: string;
  date: string;
  amount: string;
  status: string;
  color: string
}

const Tier = ({ name, date, amount, status, color }: Props) => {
  console.log(color)
  return (
    <tr >
      <td>
        <Image src="https://github.com/safak/nextadmin/blob/completed/public/noavatar.png?raw=true" alt='' width={40} height={40} className='' />
        {name}
      </td>
      <td>
        <span className={`bg-${color}-200 inline-block py-1 px-2 rounded`}>{status}</span>
      </td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  )
}

export default Tier