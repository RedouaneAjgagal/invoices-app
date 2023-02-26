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
      {itemsList.map(item => <Item key={item.id} itemName={item.name} quantity={item.quantity} price={item.price} itemTotal={item.total} />)}

      <Total total={total} />
    </div>
  )
}

export default Amount