import React from 'react'
import { Link } from 'react-router-dom'
import Status from '../../Helpers/Status'
import { formatPriceHanlder } from '../../utils/formatPrices'
import { RiArrowRightSLine } from 'react-icons/ri'
interface InvoiceData {
    id: string,
    clientName: string,
    date: string,
    amount: number,
    status: 'paid' | 'pending' | 'draft'
}

const Invoice: React.FC<InvoiceData> = (props) => {
    const id = props.id;
    const clientName = props.clientName;
    const date = `Due ${props.date}`;
    const amount = formatPriceHanlder(props.amount)
    const status = props.status


    return (
        <li className='dark:bg-darkBlue bg-white rounded-lg shadow-xl'>
            <Link to={id} className='grid grid-cols-2 p-4 border border-transparent hover:border-primaryPurple rounded-lg  duration-300 ease-in-out md:grid-cols-5 items-center relative'>
                <span className='font-medium dark:text-primaryPurple text-indigo-600 mb-4 md:mb-0'>#<span className='dark:text-white text-black'>{id}</span></span>
                <p className='dark:text-darkTextGray text-lightTextGray justify-self-end md:justify-self-start'>{date}</p>
                <p className='dark:text-darkTextGray text-lightTextGray col-span-3 md:col-span-1'>{clientName}</p>
                <span className='font-medium text-2xl'>{amount}</span>
                <Status status={status} />
                <RiArrowRightSLine className='hidden md:flex md:text-primaryPurple md:-mb-[.15rem] md:w-5 md:h-5 md:absolute md:right-4' />
            </Link>
        </li>
    )
}

export default Invoice