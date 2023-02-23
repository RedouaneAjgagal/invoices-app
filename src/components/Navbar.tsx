import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import user from '../assets/image-avatar.jpg'
import { HiSun } from 'react-icons/hi'

const Navbar = () => {
    return (
        <nav className='dark:bg-darkBlue bg-lightDarkBlue flex justify-between items-center shadow-lg'>
            <div className='bg-primaryPurple relative z-20 rounded-r-3xl after:w-full after:h-[50%] after:bg-indigo-200/25 after:rounded-br-3xl after:rounded-tl-3xl after:absolute after:bottom-0 after:left-0 after:-z-10'>
                <Link to='/'><img src={logo} alt="invoices-logo" className='p-6 w-[5.5rem]' /></Link>
            </div>
            <div className='flex items-center gap-4'>
                <button><HiSun className='text-2xl text-slate-400' /></button>
                <div className='px-4 border-l border-slate-600'>
                    <img src={user} alt="user-profile-img" className='rounded-full w-full max-w-[2.5rem]' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar