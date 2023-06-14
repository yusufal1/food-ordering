import React from 'react'
import Image from 'next/image'

const Order = () => {
  return (
      <div className='overflow-x-auto'>
<div className="flex items-center justify-center flex-col p-10 min-h-[calc(100vh_-_433px)] min-w-[1000px]">
        <div className="flex items-center overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th className="py-3 px-6" scope="col">ORDER ID</th>
                <th className="py-3 px-6" scope="col">CUSTOMER</th>
                <th className="py-3 px-6" scope="col">ADDRESS</th>
                <th className="py-3 px-6" scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  6321651561
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Yusuf AL
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Adana</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-between w-full p-10 bg-primary mt-6'>
            <div className='relative flex flex-col items-center'>
                <Image src="/images/paid.png" alt='' width={40} height={40} objectFit='contain'/>
                <span>Payment</span>
            </div>
            <div className='relative flex flex-col items-center animate-pulse'>
                <Image src="/images/bake.png" alt='' width={40} height={40} objectFit='contain'/>
                <span>Preparing</span>
            </div>
            <div className='relative flex flex-col items-center'>
                <Image src="/images/bike.png" alt='' width={40} height={40} objectFit='contain'/>
                <span>One the way</span>
            </div>
            <div className='relative flex flex-col items-center'>
                <Image src="/images/delivered.png" alt='' width={40} height={40} objectFit='contain'/>
                <span>Delivered</span>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Order