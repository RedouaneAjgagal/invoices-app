import React from 'react'
import { Form as FormRouter, redirect } from 'react-router-dom'
import Input from './Input'
import ItemListContainer from './ItemListContainer'
import CallToAction from '../../Helpers/CallToAction'
import { invoiceDetail } from '../invoiceDetail/ItemDetail'
import SelectContainer from './SelectContainer'
interface Props {
    buttons: ['cancel' | 'discard', 'send', 'draft'?];
    editData?: invoiceDetail
}

const Form: React.FC<Props> = ({ buttons, editData }) => {
    
    return (
        <>
            {editData?.id ?
                <h1 className='font-medium text-3xl'>Edit <span className='dark:text-purple-500 text-purple-600'>#</span>{editData.id}</h1>
                :
                <h1 className='font-medium text-3xl'>New Invoice</h1>
            }
            <FormRouter className='flex flex-col gap-8 pb-20'>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill From</h3>
                    <Input id='from_street_address' label='Steet Address' type='text' defaultValue={editData?.senderAddress.street} />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input id='from_city' label='City' type='text' defaultValue={editData?.senderAddress.city} />
                        <Input id='from_post_code' label='Post Code' type='text' defaultValue={editData?.senderAddress.postCode} />
                    </div>
                    <Input id='from_country' label='Country' type='text' defaultValue={editData?.senderAddress.country} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill To</h3>
                    <Input id='to_client_name' label="Client's Name" type='text' defaultValue={editData?.clientName} />
                    <Input id='to_client_email' label="Client's Email" type='email' defaultValue={editData?.clientEmail}/>
                    <Input id='to_street_address' label='Steet Address' type='text' defaultValue={editData?.clientAddress.street} />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input id='to_city' label='City' type='text' defaultValue={editData?.clientAddress.city} />
                        <Input id='to_post_code' label='Post Code' type='text' defaultValue={editData?.clientAddress.postCode} />
                    </div>
                    <Input id='to_country' label='Country' type='text' defaultValue={editData?.clientAddress.country} />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input id='invoice_date' label='Invoice Date' type='date' defaultValue={editData?.createdAt} />
                    <SelectContainer id='payment_terms' label='Payment Terms' defaultValue={editData?.paymentTerms} />
                    <Input id='project_description' label='Project Description' type='text' defaultValue={editData?.description} />
                </div>
                <ItemListContainer items={editData?.items} />
                <CallToAction buttons={buttons} />
            </FormRouter>
        </>
    )
}

export default Form


// export const action = () => {
//     console.log('happned');
    
//     return redirect('/invoices')
// } 