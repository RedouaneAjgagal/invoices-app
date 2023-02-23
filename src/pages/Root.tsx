import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='py-8 px-4'>
        <Outlet />
      </main>
    </>
  )
}

export default Root