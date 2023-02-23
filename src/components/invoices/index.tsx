import React from 'react'
import InvoicesBar from './InvoicesBar'
import InvoicesList from './InvoicesList'
const InvoicesContainer = () => {
    return (
        <div className='flex flex-col gap-8'>
            <InvoicesBar />
            <InvoicesList />
        </div>
    )
}

export default InvoicesContainer