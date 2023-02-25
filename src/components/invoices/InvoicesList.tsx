import React from 'react'
import Invoice from './Invoice'
import data from '../../data/data.json';
const InvoicesList = () => {
    const invoices = data;

    return (
        <ul className='flex flex-col gap-3'>
            {invoices.map(invoice =>
                <Invoice key={invoice.id} id={invoice.id} clientName={invoice.clientName} date={invoice.createdAt} amount={invoice.total} status={invoice.status as "pending" | "paid" | "draft"} />
            )}
        </ul>
    )
}

export default InvoicesList