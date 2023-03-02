import React, { useState } from 'react'
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
    const [itemDetail, setItemDetail] = useState({
        quantity: props.values?.quantity || 1,
        price: props.values?.price || 0
    });
    const removeItemHandler = () => {
        props.removeItem(props.id)
    }
    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim().length === 0) return
        if (e.target.name === 'itemQty') {
            setItemDetail(prev => {
                return {...prev, quantity: +e.target.value}
            });
        } else {
            setItemDetail(prev => {
                return {...prev, price: +e.target.value}
            });
        }
    }
    const quantityId = crypto.randomUUID()
    const priceId = crypto.randomUUID()
    
    const calctotal = itemDetail.quantity * itemDetail.price
    const total = formatPriceHanlder(calctotal)

    return (
        <div className='flex flex-col gap-4'>
            <Input id={crypto.randomUUID()} name='itemName' label='Item Name' type='text' defaultValue={props.values?.name} />
            <div className='grid grid-cols-5 gap-3'>
                <div>
                    <div className='flex flex-col gap-2'>
                        <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={quantityId}>Qty</label>
                        <input onChange={getValue} type='number' id={quantityId} name='itemQty' defaultValue={props.values?.quantity || 1} className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium`} />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-2'>
                        <label className='dark:text-darkTextGray text-lightTextGray' htmlFor={priceId}>Price</label>
                        <input onChange={getValue} type='number' id={priceId} name='itemPrice' defaultValue={props.values?.price || 0} className={`outline-none dark:bg-darkBlue border dark:border-slate-800 hover:dark:border-primaryPurple hover:border-primaryPurple duration-300 ease-linear bg-white p-3 rounded font-medium`} />
                    </div>
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