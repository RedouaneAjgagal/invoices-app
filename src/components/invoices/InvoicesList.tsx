import React from 'react'
import Invoice from './Invoice'

interface Props {
    list: {
        id: string,
        clientName: string,
        date: string,
        amount: number,
        status: 'paid' | 'pending' | 'draft'
    }[]
}
const InvoicesList: React.FC<Props> = ({ list }) => {
    
    return (
        <ul className='flex flex-col gap-3'>
            {list.map(invoice =>
                <Invoice key={invoice.id} id={invoice.id} clientName={invoice.clientName} date={invoice.date} amount={invoice.amount} status={invoice.status} />
            )}
        </ul>
    )
}

export default InvoicesList