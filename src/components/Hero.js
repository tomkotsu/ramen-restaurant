import React from 'react'
import title from '../imgs/daruma-ramen-title.png'
import slogan from '../imgs/daruma-ramen-slogan.png'

const Hero = () => {
  return (
    <div className='bg-zinc-800 h-[80vh]'>
        <div className='hero__wrapper flex flex-col mx-6 md:mx-48 lg:mx-96 my-40 mt-64 gap-14 min-w-[300px] justify-center items-center'>
            <img src={title} alt=""/>
            <img src={slogan} className="w-96" alt=""/>
        </div>
    </div>
  )
}

export default Hero