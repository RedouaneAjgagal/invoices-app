import React from 'react'
import Item from './Item'
import Total from './Total'

interface Props {
  itemsList: {
    name: string;
    quantity: number;
    price: number;
    total: number;
    id: string
  }[],
  total: number
}

const Amount: React.FC<Props> = ({ itemsList, total }) => {
  return (
    <div className='dark:bg-slate-600/10 bg-slate-100/80 rounded-lg'>
      <div className='hidden sm:grid sm:grid-cols-4 sm:px-8 sm:pt-6 sm:pb-5 sm:dark:text-darkTextGray sm:text-lightTextGray sm:text-sm'>
        <span>Item Name</span>
        <span className='sm:justify-self-end'>Qty</span>
        <span className='sm:justify-self-end'>Price</span>
        <span className='sm:justify-self-end'>Total</span>
      </div>
      {itemsList.map(item => <Item key={item.id} itemName={item.name} quantity={item.quantity} price={item.price} itemTotal={item.total} />)}

      <Total total={total} />
    </div>
  )
}

export default Amount