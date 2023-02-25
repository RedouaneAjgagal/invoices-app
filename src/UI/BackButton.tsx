import React from 'react'
import { RiArrowDropLeftLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const BackButton = () => {
  const navigate = useNavigate()
  const getBackHandler = () => {
    navigate('..')
  }
  return (
    <button onClick={getBackHandler} className='flex items-center font-medium hover:text-slate-300 ease-in-out duration-300'><RiArrowDropLeftLine className='w-8 h-8 text-primaryPurple' />Go back</button>
  )
}

export default BackButton