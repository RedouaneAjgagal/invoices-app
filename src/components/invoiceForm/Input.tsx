import React from 'react'

interface Props {
    type: 'text' | 'number' | 'email' | 'date';
    label: string,
    id: string,
    defaultValue?: string | number
    name?: string,
    action?: "get" | "post" | "put" | "delete" | "patch"
}

const Input: React.FC<Props> = (props) => {
    let value = props.defaultValue
    if (props.type === 'date' && props.action === 'post') {
        const date = new Date();
        const currentDay = date.toISOString().split('T')[0]
        value = currentDay
    }

    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name ? props.name : props.id} defaultValue={value} className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium`} />
        </div>
    )
}
export default Input