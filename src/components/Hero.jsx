import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] mx-auto w-full h-screen text-center'>
            <p className='font-bold text-[#00df9a]'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold'>Growing With Data</h1>
            <div className='flex justify-center items-center md:mb-2 mb-1'>
              <p className='md-text-5xl sm:text-4xl text-xl font-bold '>Fast, Flexible financing for</p>
              <Typed 
                className='md-text-5xl sm:text-4xl text-xl font-bold pl-2'
                strings={['BTB', 'BTC', 'SASS']} 
                typeSpeed={140} 
                backSpeed={120} 
                loop
              />
            </div>
            <p className='md:text-2xl text-xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC $ SASS platforms</p>
            <button className='bg-[#00df9a] rounded-md my-6 p-2 text-black font-extrabold'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero;