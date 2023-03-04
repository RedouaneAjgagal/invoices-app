import React from 'react'
import { formatPriceHanlder } from '../../utils/formatPrices'

interface Props {
    itemName: string,
    quantity: number,
    price: number,
    itemTotal: number
}

const Item: React.FC<Props> = (props) => {
    const price = formatPriceHanlder(props.price);
    const itemTotal = formatPriceHanlder(props.itemTotal)
    return (
        <div className='px-4 h-24 flex justify-between items-center font-medium sm:grid sm:grid-cols-4 sm:h-16 sm:px-8'>
            <div className='sm:col-span-3 sm:grid sm:grid-cols-3'>
                <h1 className='dark:text-white text-black sm:justify-self-start sm:col-span-1'>{props.itemName}</h1>
                <div className='flex gap-3 sm:grid sm:grid-cols-2 sm:col-span-2'>
                    <p className='dark:text-darkTextGray text-lightTextGray flex gap-1 sm:justify-self-end'>{props.quantity}<span className='sm:hidden'>x</span></p>
                    <span className='sm:justify-self-end'>{price}</span>
                </div>
            </div>
            <div className='sm:justify-self-end'>
                <span className='dark:text-white text-black'>{itemTotal}</span>
            </div>
        </div>
    )
}

export default Item