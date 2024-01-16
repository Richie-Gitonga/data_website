import React from 'react'
import laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white text-black py-16 px-4'>
        <div className=' max-w-[1000px] grid md:grid-cols-2 mx-auto'>
            <img src={laptop} alt="/" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] text-xl'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-extrabold md:text-3xl sm:text-2xl text-2xl '>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis! Tempora architecto, voluptate exercitationem et aliquid delectus provident. Iusto doloribus minus aperiam velit repellendus ex tempora quam eligendi? Consequatur, amet.</p>
                <button className='w-[200px] bg-[#00df9a] rounded-md mx-auto md:mx-0 my-6 p-2 text-black font-bold md:text-xl'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics