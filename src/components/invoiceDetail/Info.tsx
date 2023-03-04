import React from 'react'

interface Props {
    invoiceInfo: {
        id: string;
        description: string;
        senderAddress: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        billTo: {
            name: string;
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
        invoiceDate: string;
        paymentDue: string;
        sentTo: string;
    }
}

const Info: React.FC<Props> = ({ invoiceInfo }) => {
    const formatedInvoiceDate = new Date(invoiceInfo.invoiceDate)
    const invoiceDate = formatedInvoiceDate.toLocaleDateString('en-us', { day: 'numeric', month: 'long', year: 'numeric' });

    const formatedPaymentDue = new Date(invoiceInfo.paymentDue)
    const paymentDue = formatedPaymentDue.toLocaleDateString('en-us', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6 sm:flex-row sm:justify-between'>
                <div>
                    <span className='font-medium text-primaryPurple'>#<span className='dark:text-white text-black'>{invoiceInfo.id}</span></span>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.description}</p>
                </div>
                <div className='sm:text-right'>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.senderAddress.street}</p>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.senderAddress.city}</p>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.senderAddress.postCode}</p>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.senderAddress.country}</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 sm:flex-row sm:justify-between'>
                <div className='flex justify-between sm:gap-14 md:gap-28'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Invoice Date</p>
                            <h2 className='font-medium text-xl'>{invoiceDate}</h2>
                        </div>
                        <div>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Payment Due</p>
                            <h2 className='font-medium text-xl'>{paymentDue}</h2>
                        </div>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Bill To</p>
                            <h2 className='font-medium text-xl'>{invoiceInfo.billTo.name}</h2>
                        </div>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.billTo.street}</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.billTo.city}</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.billTo.postCode}</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>{invoiceInfo.billTo.country}</p>
                    </div>
                </div>
                <div>
                    <p className='dark:text-darkTextGray text-lightTextGray'>Sent to</p>
                    <h2 className='font-medium text-xl'>{invoiceInfo.sentTo}</h2>
                </div>
            </div>
        </div>
    )
}

export default Info