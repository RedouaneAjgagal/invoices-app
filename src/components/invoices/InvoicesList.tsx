import React from 'react'
import Invoice from './Invoice'
const InvoicesList = () => {
    return (
        <ul className='flex flex-col gap-3'>
            <Invoice id='RT3080' clientName='Jensen Huang' date='19 Aug 2021' amount={1800.9} status='Pending' />
            <Invoice id='XM9141' clientName='Alex Grim' date='20 Sep 2021' amount={556} status='Paid' />
            <Invoice id='RG0314' clientName='Jhon Marrison' date='1 Oct 2021' amount={14002.33} status='Draft' />
        </ul>
    )
}

export default InvoicesList