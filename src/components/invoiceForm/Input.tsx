import React from 'react'

interface Props {
    type: 'text' | 'number' | 'email' | 'date';
    label: string,
    id: string,
    defaultValue?: string | number
}

const Input: React.FC<Props> = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.id} defaultValue={props.defaultValue} className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium`} />
        </div>
    )
}

export default Input