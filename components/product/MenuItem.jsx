import React from 'react'
import Image from 'next/image'
import {RiShoppingCart2Fill} from "react-icons/ri"
import Link from 'next/link'

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-3xl'>
        <div className='w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[30px] rounded-t-2xl'>
            <Link href="/product">
            <div className='relative w-36 h-36 hover:scale-105 transition-all duration-500'>
                <Image src="/images/f1.png" alt='' layout='fill'/>
            </div>
            </Link>
        </div>
        <div className='p-[25px] text-white'>
            <h4 className='text-xl font-semibold'>Delicious Pizza</h4>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda minima neque minus magni repellendus exercitationem eum quas ab earum iusto!</p>
            <div className='flex justify-between items-center mt-5'>
                <span>$20</span>
                <button className='btn-primary w-10 h-10 rounded-full !p-0 grid place-content-center'>
                    <RiShoppingCart2Fill/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem