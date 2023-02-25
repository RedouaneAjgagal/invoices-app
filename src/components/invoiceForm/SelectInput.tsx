import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import SelectButton from './SelectButton';
const SelectInput = () => {
    const [isTerm, setItTerm] = useState({
        open: false,
        title: 'Net 1 Day'
    });
    const openTermsHandler = () => {
        setItTerm(prev => {
            return { ...prev, open: !prev.open }
        })
    }
    const selectHanlder = (title: string) => {
        setItTerm({ open: false, title: title })
    }

    return (
        <div className='relative'>
            <button onClick={openTermsHandler} type='button' className='w-full dark:bg-darkBlue border dark:border-slate-800 bg-white p-3 rounded font-medium flex items-center justify-between hover:border-primaryPurple duration-300 ease-linear'>
                <span>{isTerm.title}</span>
                <span><RiArrowDownSLine className='text-primaryPurple -mb-[.15rem] text-xl' /></span>
            </button>
            {isTerm.open ?
                <ul className='absolute z-30 top-14 w-full dark:bg-[#252945] bg-white rounded-lg font-medium text-darkTextGray shadow-xl drop-shadow-xl'>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton title='Net 1 Day' onSelect={selectHanlder} />
                    </li>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton title='Net 7 Days' onSelect={selectHanlder} />
                    </li>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton title='Net 14 Days' onSelect={selectHanlder} />
                    </li>
                    <li>
                        <SelectButton title='Net 30 Days' onSelect={selectHanlder} />
                    </li>
                </ul>
                : null
            }
        </div>
    )
}

export default SelectInput