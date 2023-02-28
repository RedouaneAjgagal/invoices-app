import React, { useState, useContext, useEffect } from 'react'
// import SelectPaymentTerm from '../../store/paymentTerm';

interface Props {
    label: string,
    id: string,
    defaultValue?: number
}

const SelectContainer: React.FC<Props> = (props) => {

    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' >{props.label}</label>
            <select name={props.id} id={props.id} className='selectBtn w-full dark:bg-darkBlue border dark:border-slate-800 bg-white p-3 rounded font-medium flex items-center justify-between hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear' defaultValue={props.defaultValue}>
                <option value={1}>Net 1 Day</option>
                <option value={7}>Net 7 Days</option>
                <option value={14}>Net 14 Days</option>
                <option value={30}>Net 30 Days</option>
            </select>
        </div>
    )
}

export default SelectContainer