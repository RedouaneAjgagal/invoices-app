import React from 'react'
import { formatPriceHanlder } from '../../utils/formatPrices'
interface Props {
    total: number
}
const Total: React.FC<Props> = (props) => {
    const total = formatPriceHanlder(props.total)
    return (
        <div className='px-4 h-24 dark:bg-black/75 flex justify-between items-center rounded-b'>
            <p className='text-[.9rem]'>Amount Due</p>
            <span className='font-medium text-2xl'>{total}</span>
        </div>
    )
}

export default Total