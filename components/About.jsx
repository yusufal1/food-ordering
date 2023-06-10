import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'

const About = () => {
  return (
    <div className='bg-secondary py-14'>
        <div className='container mx-auto flex items-center text-white gap-20 flex-wrap-reverse justify-center'>
            <div className='grid place-content-center'>
                <div className='relative sm:w-[445px] sm:h-[600px] w-[300px] h-[500px]'>
                    <Image src="/images/about-img.png" alt='' layout='fill'/>
                </div>
            </div>
            <div className='md:w-1/2'>
                <Title className="text-[40px]">We Are Feane</Title>
                <p className='text-base my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo similique maiores at quam voluptas, exercitationem sint a aliquid voluptatem unde distinctio quaerat laudantium veniam, ut nihil perspiciatis quae. Quasi expedita ea cumque amet voluptatibus impedit asperiores, assumenda vero corporis aut, in reprehenderit cum placeat vel ducimus dignissimos, pariatur perspiciatis quod?</p>
                <button className='btn-primary'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default About