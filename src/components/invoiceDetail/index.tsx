import React from 'react'
import Nav from './Nav'
import ItemDetail from './ItemDetail'
const InvoiceInfo = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Nav />
        <ItemDetail />
    </div>
  )
}

export default InvoiceInfo