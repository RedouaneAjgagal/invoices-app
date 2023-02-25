import React from 'react'
import Input from './Input'
import { FaTrash } from 'react-icons/fa'

interface Props {
    id: string,
    removeItem: (id: string) => void
}

const ItemListInput: React.FC<Props> = (props) => {
    const removeItemHandler = () => {
        props.removeItem(props.id)
    }
    return (
        <div className='flex flex-col gap-4'>
            <Input id={crypto.randomUUID()} label='Item Name' type='text' />
            <div className='grid grid-cols-5 gap-3'>
                <div>
                    <Input id={crypto.randomUUID()} label='Qty.' type='number' />
                </div>
                <div className='col-span-2'>
                    <Input id={crypto.randomUUID()} label='Price.' type='number' />
                </div>
                <div className='flex flex-col justify-between col-span-2'>
                    <span>Total</span>
                    <div className='flex justify-between items-center mb-4 dark:text-darkTextGray text-lightTextGray'>
                        <p className='font-medium'>$0.00</p>
                        <button onClick={removeItemHandler} type='button' className='hover:text-red-500 duration-200 ease-in-out'><FaTrash /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListInput