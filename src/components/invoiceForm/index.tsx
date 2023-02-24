import React from 'react'
import BackButton from '../../UI/BackButton'
import Form from './Form'
const InvoiceForm = () => {
  return (
    <div className='flex flex-col gap-6'>
        <BackButton />
        <Form />
    </div>
  )
}

export default InvoiceForm