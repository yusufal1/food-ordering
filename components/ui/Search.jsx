import React from 'react'
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import Title from './Title';
import { AiFillCloseCircle } from "react-icons/ai"

const Search = ({setIsSearchModal}) => {
  return (
    <div className="absolute w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 first-of-type:h-screen grid place-content-center after:opacity-60">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className='w-full h-full grid place-content-center'>
            <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title className="text-[40px] text-center">Search</Title>
            <input className='border w-full my-10' type="text" placeholder='Search...'/>
                <ul>
                    <li className='flex justify-between items-center p-1 transition-all hover:bg-primary'>
                        <div className='relative flex'>
                            <Image width={48} height={48} src="/images/f1.png" alt=""/>
                        </div>
                        <span className='font-bold'>Good Pizza</span>
                        <span className='font-bold'>$10</span>
                    </li>
                    <li className='flex justify-between items-center p-1 transition-all hover:bg-primary'>
                        <div className='relative flex'>
                            <Image width={48} height={48} src="/images/f1.png" alt=""/>
                        </div>
                        <span className='font-bold'>Good Pizza</span>
                        <span className='font-bold'>$10</span>
                    </li>
                    <li className='flex justify-between items-center p-1 transition-all hover:bg-primary'>
                        <div className='relative flex'>
                            <Image width={48} height={48} src="/images/f1.png" alt=""/>
                        </div>
                        <span className='font-bold'>Good Pizza</span>
                        <span className='font-bold'>$10</span>
                    </li>
                </ul>
                <button className='absolute top-4 right-4' onClick={() => setIsSearchModal(false)}>
                    <AiFillCloseCircle size={30} className='text-primary transition-all'/>
                </button>
            </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default Search