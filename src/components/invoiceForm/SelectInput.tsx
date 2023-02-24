import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
const SelectInput = () => {
    return (
        <div className='relative'>
            <button type='button' className='w-full dark:bg-darkBlue border border-slate-800 bg-white p-3 rounded font-medium flex items-center justify-between hover:border-primaryPurple duration-300 ease-linear'>
                <span>Net 1 Day</span>
                <span><RiArrowDownSLine className='text-primaryPurple -mb-[.15rem] text-xl' /></span>
            </button>
            <ul className='hidden absolute z-30 top-14 w-full dark:bg-[#252945] rounded-lg font-medium text-darkTextGray shadow-xl drop-shadow-xl'>
                <li className='border-b border-slate-900/50'>
                    <button className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out'>Net 1 Day</button>
                </li>
                <li className='border-b border-slate-900/50'>
                    <button className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out'>Net 7 Days</button>
                </li>
                <li className='border-b border-slate-900/50'>
                    <button className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out'>Net 14 Days</button>
                </li>
                <li>
                    <button className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out'>Net 30 Days</button>
                </li>
            </ul>
        </div>
    )
}

export default SelectInput