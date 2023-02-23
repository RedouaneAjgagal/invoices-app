import React from 'react'
import { Link } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'

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
    let bgColor = 'bg-orange-600/10';
    let statusColor = 'text-orange-400';

    if (props.status === 'Paid') {
        bgColor = 'bg-emerald-600/10';
        statusColor = 'text-emerald-400';
    }
    if (props.status === 'Draft') {
        bgColor = 'bg-slate-600/10';
        statusColor = 'text-slate-400'
    }


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
                        <div className={`flex justify-center h-10 w-full max-w-[7rem] rounded ${bgColor}`}>
                            <span className={`font-medium tracking-wide flex items-center gap-1 ${statusColor}`}><GoPrimitiveDot className='-mb-[.1rem]' />{status}</span>
                        </div>
                    </div>
                </Link>
            </li>
        )
}

export default Invoice