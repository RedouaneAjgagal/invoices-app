import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { RiArrowRightSLine } from 'react-icons/ri'

interface Props {
    status: 'paid' | 'pending' | 'draft'
}

const Status: React.FC<Props> = (props) => {

    let bgColor = 'bg-orange-600/10';
    let statusColor = 'text-orange-400';

    if (props.status === 'paid') {
        bgColor = 'bg-emerald-600/10';
        statusColor = 'dark:text-emerald-400 text-emerald-500';
    }
    if (props.status === 'draft') {
        bgColor = 'bg-slate-600/10';
        statusColor = 'dark:text-slate-400 text-gray-600'
    }
    const slicedStatus = props.status.slice(1);
    const status = `${props.status.slice(0, 1).toUpperCase()}${slicedStatus}`
    return (
        <div className='flex items-center w-full justify-end gap-4'>
            <div className={`flex justify-center max-w-[7rem] h-10 w-full rounded ${bgColor}`}>
                <span className={`font-medium tracking-wide flex items-center gap-1 ${statusColor}`}><GoPrimitiveDot className='-mb-[.1rem]' />{status}</span>
            </div>
            <span className='w-6 h-6 items-center justify-center hidden md:flex'><RiArrowRightSLine className='text-primaryPurple -mb-[.15rem] w-5 h-5' /></span>
        </div>
    )
}

export default Status