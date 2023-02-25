import React from 'react'
import SelectInput from './SelectInput';

interface Props {
    type: 'text' | 'number' | 'email' | 'date';
    label: string,
    id: string,
    value?: string | number,
    select?: boolean
}

const Input: React.FC<Props> = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.id} defaultValue={props?.value} className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium ${props?.select && 'sr-only'}`} />
            {props?.select &&
                <SelectInput />
            }
        </div>
    )
}

export default Input