import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import user from '../assets/image-avatar.jpg'
import { HiSun } from 'react-icons/hi'
import { HiMoon } from 'react-icons/hi'

const Navbar = () => {
    const getDarkMode = localStorage.darkMode;
    const darkMode = JSON.parse(getDarkMode);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(darkMode);
    const darkModeHandler = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.darkMode = false
        } else {
            document.documentElement.classList.add('dark')
            localStorage.darkMode = true
        }
        setIsDarkMode(prev => !prev);
    }
    return (
        <div className='pr-0 lg:pr-[5.5rem]'>
            <nav className='dark:bg-darkBlue bg-lightDarkBlue flex justify-between items-center shadow-lg lg:flex-col lg:fixed lg:h-full lg:rounded-tr-3xl lg:rounded-br-3xl'>
                <div className='bg-primaryPurple relative z-20 rounded-r-3xl after:w-full after:h-[50%] after:bg-indigo-200/25 after:rounded-br-3xl after:rounded-tl-3xl after:absolute after:bottom-0 after:left-0 after:-z-10'>
                    <Link to='/'><img src={logo} alt="invoices-logo" className='p-6 w-[5.5rem]' /></Link>
                </div>
                <div className='flex items-center gap-6 lg:flex-col h-full lg:w-full lg:h-auto'>
                    <button onClick={darkModeHandler}>{isDarkMode === true ? <HiSun className='text-2xl text-slate-400' /> : <HiMoon className='text-2xl text-slate-400' />}</button>
                    <div className='border-l border-slate-600 h-[5.3rem] lg:border-t lg:border-l-0 lg:w-full lg:h-auto'></div>
                    <div className='pr-6 lg:pb-6 lg:pt-1 lg:pr-0'>
                        <img src={user} alt="user-profile-img" className='rounded-full w-full  shadow-lg max-w-[2.5rem]' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar