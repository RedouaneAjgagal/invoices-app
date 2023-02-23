import React from 'react'
import { Link } from 'react-router-dom'
import Status from '../../Helpers/Status'

interface InvoiceData {
    id: string,
    clientName: string,
    date: string,
    amount: number,
    status: 'Paid' | 'Pending' | 'Draft'
}


const Invoice: React.FC<InvoiceData> = (props) => {
    const id = props.id;
    const clientName = props.clientName;
    const date = `Due ${props.date}`;
    const formatedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(props.amount)
    const amount = `$${formatedAmount}`
    const status = props.status


        return (
            <li className='dark:bg-darkBlue bg-white rounded-lg shadow-xl'>
                <Link to={id} className='flex flex-col gap-2 p-4 border border-transparent hover:border-primaryPurple rounded-lg  duration-300 ease-in-out'>
                    <div className='flex justify-between items-center'>
                        <span className='font-medium text-primaryPurple'>#<span className='dark:text-white text-black'>{id}</span></span>
                        <p className='dark:text-darkTextGray text-lightTextGray'>{clientName}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='dark:text-darkTextGray text-lightTextGray'>{date}</p>
                            <span className='font-medium text-2xl'>{amount}</span>
                        </div>
                        <Status status={status} />
                    </div>
                </Link>
            </li>
        )
}

export default Invoice