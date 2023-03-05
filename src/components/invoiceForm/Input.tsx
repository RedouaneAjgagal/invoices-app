import React, { useContext, useRef } from 'react'
export type inputErrors = [
    'from_street_address',
    'from_city',
    'from_post_code',
    'from_country',
    'to_client_name',
    'to_client_email',
    'to_street_address',
    'to_city',
    'to_post_code',
    'to_country',
    'invoice_date',
    'payment_terms',
    'project_description'
] | []
interface Props {
    type: 'text' | 'number' | 'email' | 'date';
    label: string,
    id: string,
    defaultValue?: string | number
    name?: string,
    action?: "get" | "post" | "put" | "delete" | "patch",
    errors?: inputErrors
}

const Input: React.FC<Props> = (props) => {
    let value = props.defaultValue
    if (props.type === 'date' && props.action === 'post') {
        const date = new Date();
        const currentDay = date.toISOString().split('T')[0]
        value = currentDay
    }
    const error = props.errors?.filter(error => error === props.id)[0]
    
    return (
        <div className='flex flex-col gap-2'>
            <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name ? props.name : props.id}  className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium ${error && 'dark:border-red-600/90 border-red-600'}`} defaultValue={value} />
            {error && <span className='dark:text-red-500 text-red-600 text-sm'><i>{error === 'to_client_email' ? 'Invalid email' : 'Required field'}</i></span>}
        </div>
    )
}
export default Input