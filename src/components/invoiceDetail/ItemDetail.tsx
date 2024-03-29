import React from 'react'
import Status from '../../Helpers/Status'
import Amount from './Amount'
import Info from './Info'
import CallToAction from '../../Helpers/CallToAction'
import data from '../../data/data.json'
export type invoiceDetail = typeof data[0]
interface Props {
    details: invoiceDetail,
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
            <div className='p-4 dark:bg-darkBlue bg-white rounded shadow-lg dark:shadow-black/20 shadow-slate-200/50 sm:flex sm:justify-between sm:py-2 sm:px-8'>
                <div className='flex justify-between items-center sm:justify-start sm:gap-4'>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Status</p>
                    <div className='w-28'>
                        <Status status={status} />
                    </div>
                </div>
                <CallToAction buttons={['edit', 'delete']} status={details.status as 'paid' | 'pending' | 'draft'} />

            </div>
            <article className='p-4 dark:bg-darkBlue bg-white rounded flex flex-col gap-8 shadow-lg dark:shadow-black/20 shadow-slate-200/50 sm:p-8'>
                <Info invoiceInfo={invoiceInfo} />
                {itemsList.length ?
                    <Amount itemsList={itemsList} total={details.total} />
                    :
                    null
                }
            </article>
        </section>
    )
}

export default ItemDetail