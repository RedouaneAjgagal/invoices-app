import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

interface Props {
    status: 'Paid' | 'Pending' | 'Draft'
}

const Status: React.FC<Props> = (props) => {

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
        <div className={`flex justify-center h-10 w-full max-w-[7rem] rounded ${bgColor}`}>
            <span className={`font-medium tracking-wide flex items-center gap-1 ${statusColor}`}><GoPrimitiveDot className='-mb-[.1rem]' />{props.status}</span>
        </div>
    )
}

export default Status