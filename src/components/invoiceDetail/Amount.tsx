import React from 'react'
import Item from './Item'
import Total from './Total'
const Amount = () => {
  return (
    <div className='dark:bg-slate-600/10 rounded'>
        <Item itemName='Brand Guidelines' quantity={1} price={5565} itemTotal={5565} />
        <Total total={5565} />
    </div>
  )
}

export default Amount