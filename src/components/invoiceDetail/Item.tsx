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
        <div className='px-4 h-24 flex justify-between items-center font-medium'>
            <div>
                <h1>{props.itemName}</h1>
                <p className='dark:text-darkTextGray flex items-center gap-3'>{props.quantity} x <span>{price}</span></p>
            </div>
            <div>
                <span>{itemTotal}</span>
            </div>
        </div>
    )
}

export default Item