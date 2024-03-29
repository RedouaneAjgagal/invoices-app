import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  if (!localStorage.darkMode) {
    localStorage.setItem('darkMode', 'true');
  }
  if (localStorage.darkMode === 'false') {
    document.documentElement.classList.remove('dark')
  }
  return (
    <>
      <Navbar />
      <main className='py-8 px-4 w-full max-w-3xl mx-auto lg:pt-16'>
        <Outlet />
      </main>
    </>
  )
}

export default Root