import React from 'react'
import { RiArrowDropLeftLine } from 'react-icons/ri'
const BackButton = () => {
  return (
    <button className='flex items-center font-medium'><RiArrowDropLeftLine className='w-8 h-8 text-primaryPurple ' />Go back</button>
  )
}

export default BackButton