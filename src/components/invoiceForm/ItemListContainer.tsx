import React from 'react'
import { FiPlus } from 'react-icons/fi'
import ItemListInput from './ItemListInput'
const ItemListContainer = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-2xl dark:text-lightTextGray font-medium'>Item List</h2>
            <div className='flex flex-col gap-12'>
                <ItemListInput />
                <button className='font-medium dark:bg-[#252945] bg-lightDarkBlue py-3 rounded-full flex items-center justify-center gap-1 hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out shadow-lg'><FiPlus className='-mb-[.15rem] text-lg' />Add New Item</button>
            </div>
        </div>
    )
}

export default ItemListContainer