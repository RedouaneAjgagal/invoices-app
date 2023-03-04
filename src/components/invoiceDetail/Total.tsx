import React from 'react'
import { formatPriceHanlder } from '../../utils/formatPrices'
interface Props {
    total: number
}
const Total: React.FC<Props> = (props) => {
    const total = formatPriceHanlder(props.total)
    return (
        <div className='px-4 h-24 dark:bg-black/75 bg-slate-700 flex justify-between items-center rounded-b-lg sm:px-8'>
            <p className='text-[.9rem] text-white'>Amount Due</p>
            <span className='font-medium text-2xl text-white sm:text-3xl'>{total}</span>
        </div>
    )
}

export default Total