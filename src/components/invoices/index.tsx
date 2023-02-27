import React, { useContext } from 'react'
import FilterStatus from '../../store/filter'
import InvoicesBar from './InvoicesBar'
import InvoicesList from './InvoicesList'
import data from '../../data/data.json'

const InvoicesContainer = () => {
    const { isPaid, isPending, isDraft } = useContext(FilterStatus);
    const activeFilters = [isPaid ? 'paid' : null, isPending ? 'pending' : null, isDraft ? 'draft' : null].filter(Boolean)

    const invoices = data.map(invoice => {
        return {
            id: invoice.id,
            clientName: invoice.clientName,
            date: invoice.createdAt,
            amount: invoice.total,
            status: invoice.status as 'paid' | 'pending' | 'draft'
        }
    }).filter(invoice => {
        if (activeFilters.length) {
            let result = false
            activeFilters.filter(item => {
                if (item === invoice.status) {
                    return result = true
                }
            })
            return result
        } else {
            return invoice
        }
    })

    return (
        <div className='flex flex-col gap-8'>
            <InvoicesBar />
            <InvoicesList list={invoices} />
        </div>
    )
}

export default InvoicesContainer