import React from 'react'
import Title from '../ui/Title'

const Order = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
        <Title className="text-[40px]">Products</Title>
        <div className="overflow-x-auto w-full mt-5">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th className="py-3 px-6" scope="col">PRODUCT ID</th>
                <th className="py-3 px-6" scope="col">CUSTOMER</th>
                <th className="py-3 px-6" scope="col">TOTAL</th>
                <th className="py-3 px-6" scope="col">PAYMENT</th>
                <th className="py-3 px-6" scope="col">STATUS</th>
                <th className="py-3 px-6" scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    56165156156
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Yusuf AL
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$18</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Cash</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    Preparing
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button className='btn-primary !bg-success'>Next Step</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Order