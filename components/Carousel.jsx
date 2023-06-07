import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    appenDots: (dots) => (
      <div>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 border bg-white rounded-full mt-5'></div>
    )
  };
  return (
    <div className='h-screen w-full container mx-auto -mt-[88px]'>
        <div className='absolute top-0 left-0 w-full h-full'>
            <div className='relative h-full w-full'>
                <Image src="/images/hero-bg.jpg" alt='' layout='fill' objectFit='cover'/>
            </div>
        </div>
        <Slider {...settings}>        
        <div>
          <div className='mt-48 text-white flex flex-col items-start gap-y-10'>
              <Title className="text-6xl">Fast Food Restaurant</Title>
              <p className='text-sm sm:w-1/2 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit, eum quidem eos placeat dolorum! Sapiente inventore beatae ipsa possimus dicta, delectus excepturi unde, placeat rem dignissimos assumenda, consequuntur quis.</p>
              <button className='btn-primary'>Order Now</button>
          </div>
        </div>
        <div>
          <div className='mt-48 text-white flex flex-col items-start gap-y-10'>
              <Title className="text-6xl">Fast Food Restaurant</Title>
              <p className='text-sm sm:w-1/2 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit, eum quidem eos placeat dolorum! Sapiente inventore beatae ipsa possimus dicta, delectus excepturi unde, placeat rem dignissimos assumenda, consequuntur quis.</p>
              <button className='btn-primary'>Order Now</button>
          </div>
        </div>
        </Slider>
    </div>
  )
}

export default Carousel