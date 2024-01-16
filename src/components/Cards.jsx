import React from 'react'
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

function Cards() {
  return (
    <div className='w-full bg-white py-24 px-4'>
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={single} alt="single" className='w-20 mt-[-3rem] mx-auto bg-white'/>
                <h2 className='mx-auto my-2 sm:text-2xl text-xl font-bold'>Single User</h2>
                <p className='text-center text-3xl font-bold'>Ksh 14,900</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2GB</p>
                </div>
                <button className='max-w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 p-2 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img src={double} alt="single" className='w-20 mt-[-3rem] mx-auto bg-white'/>
                <h2 className='mx-auto my-2 sm:text-2xl text-xl font-bold'>Double User</h2>
                <p className='text-center text-3xl font-bold'>Ksh 21,900</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Send upto 5GB</p>
                </div>
                <button className='max-w-[200px] bg-black text-[#00df9a] rounded-md mx-auto my-6 p-2'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={triple} alt="single" className='w-20 mt-[-3rem] mx-auto bg-white'/>
                <h2 className='mx-auto my-2 sm:text-2xl text-xl font-bold'>Tripple User</h2>
                <p className='text-center text-3xl font-bold'>Ksh 35,900</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Send upto 10GB</p>
                </div>
                <button className='max-w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 p-2 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards;