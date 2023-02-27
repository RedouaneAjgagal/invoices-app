import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import SelectButton from './SelectButton';

interface Props {
    value: number,
    onSelect: (value: number) => void
}
const SelectInput: React.FC<Props> = (props) => {
    const [isTerm, setItTerm] = useState({
        open: false,
        value:  props.value ? props.value : 1
    });
    const openTermsHandler = () => {
        setItTerm(prev => {
            return { ...prev, open: !prev.open }
        })
    }
    const selectHanlder = (value: number) => {
        setItTerm({ open: false, value: value })
        props.onSelect(value)
    }
    
    return (
        <div className='relative'>
            <button onClick={openTermsHandler} type='button' className='w-full dark:bg-darkBlue border dark:border-slate-800 bg-white p-3 rounded font-medium flex items-center justify-between hover:border-primaryPurple duration-300 ease-linear'>
                <span>{isTerm.value === 1 ? `Net ${isTerm.value} Day` : `Net ${isTerm.value} Days`}</span>
                <span><RiArrowDownSLine className='text-primaryPurple -mb-[.15rem] text-xl' /></span>
            </button>
            {isTerm.open ?
                <ul className='absolute z-30 top-14 w-full dark:bg-[#252945] bg-white rounded-lg font-medium text-darkTextGray shadow-xl drop-shadow-xl'>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton value={1} onSelect={selectHanlder} />
                    </li>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton value={7} onSelect={selectHanlder} />
                    </li>
                    <li className='border-b dark:border-slate-900/50'>
                        <SelectButton value={14} onSelect={selectHanlder} />
                    </li>
                    <li>
                        <SelectButton value={30} onSelect={selectHanlder} />
                    </li>
                </ul>
                : null
            }
        </div>
    )
}

export default SelectInput