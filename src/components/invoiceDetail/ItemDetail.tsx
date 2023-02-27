import React from 'react'
import Status from '../../Helpers/Status'
import Amount from './Amount'
import Info from './Info'
import CallToAction from '../../Helpers/CallToAction'
import data from '../../data/data.json'
export type invoiceDetail = typeof data[0]
interface Props {
    details: invoiceDetail
}
const ItemDetail: React.FC<Props> = ({ details }) => {
    const status = details.status as 'paid' | 'pending' | 'draft';
    const invoiceInfo = {
        id: details.id,
        description: details.description,
        senderAddress: {
            street: details.senderAddress.street,
            city: details.senderAddress.city,
            postCode: details.senderAddress.postCode,
            country: details.senderAddress.country,
        },
        billTo: {
            name: details.clientName,
            street: details.clientAddress.street,
            city: details.clientAddress.city,
            postCode: details.clientAddress.postCode,
            country: details.clientAddress.country,
        },
        invoiceDate: details.createdAt,
        paymentDue: details.paymentDue,
        sentTo: details.clientEmail
    }
    const itemsList = details.items.map(item => {
        return { ...item, id: crypto.randomUUID() }
    })
    return (
        <section className='flex flex-col gap-4 pb-20'>
            <div className='p-4 dark:bg-darkBlue bg-white rounded shadow-lg dark:shadow-black/20 shadow-slate-200/50'>
                <div className='flex justify-between items-center'>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Status</p>
                    <Status status={status} />
                </div>
                <CallToAction buttons={['edit', 'delete']} />
            </div>
            <article className='p-4 dark:bg-darkBlue bg-white rounded flex flex-col gap-8 shadow-lg dark:shadow-black/20 shadow-slate-200/50'>
                <Info invoiceInfo={invoiceInfo} />
                <Amount itemsList={itemsList} total={details.total} />
            </article>
        </section>
    )
}

export default ItemDetail