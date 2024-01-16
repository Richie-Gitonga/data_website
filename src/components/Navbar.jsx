
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1000px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Products</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contacts</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
        <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-r-gray-800' : 'fixed left-[100%]'} >
             <h1 className='w-full text-3xl font-bold text-[#00df9a] px-2 py-4'>React</h1>
            <ul>
                <li className='p-4 border-b border-b-gray-800'>Home</li>
                <li className='p-4 border-b border-b-gray-800'>Company</li>
                <li className='p-4 border-b border-b-gray-800'>Products</li>
                <li className='p-4 border-b border-b-gray-800'>About</li>
                <li className='p-4 border-b border-b-gray-800'>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;