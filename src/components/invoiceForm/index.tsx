import React from 'react'
import BackButton from '../../UI/BackButton'
import Form from './Form'
const InvoiceForm = () => {
  return (
    <div className='flex flex-col gap-6'>
      <nav>
        <BackButton />
      </nav>
      <Form buttons={['discard', 'send', 'draft']} action={"post"} />
    </div>
  )
}

export default InvoiceForm