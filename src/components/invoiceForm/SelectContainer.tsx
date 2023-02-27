import React, { useState } from 'react'
import SelectInput from './SelectInput';

interface Props {
    label: string,
    id: string,
    defaultValue?: number
}

const SelectContainer: React.FC<Props> = (props) => {
    const [selectedValue, setSelectedValue] = useState(props.defaultValue ? props.defaultValue : 1)

    const selectHandler = (value: number) => {
        setSelectedValue(value)
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={props.id}>{props.label}</label>
            <input type='number' id={props.id} name={props.id} defaultValue={selectedValue} className='outline-none dark:bg-darkBlue border dark:border-slate-800 hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium sr-only' />
            <SelectInput value={selectedValue} onSelect={selectHandler} />
        </div>
    )
}

export default SelectContainer