import React, { useState, useEffect, useRef } from 'react'
import { FiPlus } from 'react-icons/fi'
import ItemListInput from './ItemListInput'

interface Props {
    items?: {
        name: string;
        quantity: number;
        price: number;
        total: number;
    }[]
}

const ItemListContainer: React.FC<Props> = (props) => {
    const gettingData = useRef(false)

    const [itemList, setItemList] = useState<JSX.Element[]>([]);
    const removeItem = (id: string) => {
        setItemList(prev => {
            return prev.filter(item => item.props.id !== id);
        })
    }
    const addNewItemHanlder = () => {
        const id = crypto.randomUUID()
        setItemList(prev => [...prev, <ItemListInput key={id} id={id} removeItem={removeItem} />])
    }

    useEffect(() => {
        if (props.items) {
            if (gettingData.current) return
            gettingData.current = true
            props.items.map((item) => {
                const id = crypto.randomUUID()
                setItemList(prev => [...prev, <ItemListInput key={id} id={id} removeItem={removeItem} values={item} />]);
            });
        }
    }, [])
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-2xl dark:text-lightTextGray font-medium'>Item List</h2>
            <div className='flex flex-col gap-12'>
                {itemList}
                <button type='button' onClick={addNewItemHanlder} className='font-medium dark:bg-[#252945] bg-indigo-100 dark:text-darkTextGray text-slate-600 hover:bg-indigo-600 hover:text-indigo-100 py-3 rounded-full flex items-center justify-center gap-1 hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out'><FiPlus className='-mb-[.15rem] text-lg' />Add New Item</button>
            </div>
        </div>
    )
}

export default ItemListContainer