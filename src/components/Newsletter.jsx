import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 px-4 text-white'>
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-3'>
            <div className='md:col-span-2 py-4'>
                <h1 className='font-bold md:text-2xl sm:text-3xl text-xl '>Want Tips and Tricks to Optimize your Flow</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div>
                <form action="post" className='w-full flex flex-col sm:flex-row items-center justify-between'>
                    <input type="email" placeholder='Enter Your Email' className='w-full flex text-black p-2 rounded-md'/>
                    <button className='max-w-[200px] bg-[#00df9a] rounded-md my-6 p-2 ml-4 text-black'>Subscribe</button>
                </form>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter