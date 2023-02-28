import React from 'react'
import Input from './Input'
import { FaTrash } from 'react-icons/fa'
import { formatPriceHanlder } from '../../utils/formatPrices'

interface Props {
    id: string,
    removeItem: (id: string) => void,
    values?: {
        name: string;
        quantity: number;
        price: number;
        total: number;
    }
}

const ItemListInput: React.FC<Props> = (props) => {
    const removeItemHandler = () => {
        props.removeItem(props.id)
    }
    const total = props.values?.total ? formatPriceHanlder(props.values.total) : formatPriceHanlder(0);
    
    return (
        <div className='flex flex-col gap-4'>
            <Input id={crypto.randomUUID()} name='itemName' label='Item Name' type='text' defaultValue={props.values?.name} />
            <div className='grid grid-cols-5 gap-3'>
                <div>
                    <Input id={crypto.randomUUID()} name='itemQty' label='Qty' type='number' defaultValue={props.values?.quantity} />
                </div>
                <div className='col-span-2'>
                    <Input id={crypto.randomUUID()} label='Price' name='itemPrice' type='number' defaultValue={props.values?.price} />
                </div>
                <div className='flex flex-col justify-between col-span-2'>
                    <span>Total</span>
                    <div className='flex justify-between items-center mb-4 dark:text-darkTextGray text-lightTextGray'>
                        <p className='font-medium'>{total}</p>
                        <button onClick={removeItemHandler} type='button' className='hover:text-red-500 duration-200 ease-in-out'><FaTrash /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListInput