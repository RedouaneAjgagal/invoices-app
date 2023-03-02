import React from 'react'
import { ActionFunction, Form as FormRouter, redirect } from 'react-router-dom'
import Input from './Input'
import ItemListContainer from './ItemListContainer'
import CallToAction from '../../Helpers/CallToAction'
import { invoiceDetail } from '../invoiceDetail/ItemDetail'
import SelectContainer from './SelectContainer'
import { generateId } from '../../utils/generateId'
import { formData } from '../../utils/submitForm'
import { submitForm } from '../../utils/submitForm'
interface Props {
    buttons: ['cancel' | 'discard', 'send', 'draft'?];
    editData?: invoiceDetail,
    action: "get" | "post" | "put" | "delete" | "patch"
}

const Form: React.FC<Props> = ({ buttons, editData, action }) => {

    return (
        <>
            {editData?.id ?
                <h1 className='font-medium text-3xl'>Edit <span className='dark:text-purple-500 text-purple-600'>#</span>{editData.id}</h1>
                :
                <h1 className='font-medium text-3xl'>New Invoice</h1>
            }
            <FormRouter method={action} className='flex flex-col gap-8 pb-20' noValidate>
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
                    <Input id='to_client_email' label="Client's Email" type='email' defaultValue={editData?.clientEmail} />
                    <Input id='to_street_address' label='Steet Address' type='text' defaultValue={editData?.clientAddress.street} />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input id='to_city' label='City' type='text' defaultValue={editData?.clientAddress.city} />
                        <Input id='to_post_code' label='Post Code' type='text' defaultValue={editData?.clientAddress.postCode} />
                    </div>
                    <Input id='to_country' label='Country' type='text' defaultValue={editData?.clientAddress.country} />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input id='invoice_date' label='Invoice Date' type='date' defaultValue={editData?.createdAt} action={action} />
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


export const action: ActionFunction = async ({ request, params }) => {
    const getData = await request.formData();
    const data: formData = {
        fromStreetAdress: getData.get('from_street_address') as string,
        fromCity: getData.get('from_city')! as string,
        fromPostCode: getData.get('from_post_code')! as string,
        fromCountry: getData.get('from_country')! as string,
        toClientName: getData.get('to_client_name')! as string,
        toClientEmail: getData.get('to_client_email')! as string,
        toStreetAddress: getData.get('to_street_address')! as string,
        toCity: getData.get('to_city')! as string,
        toPostCode: getData.get('to_post_code')! as string,
        toCountry: getData.get('to_country')! as string,
        invoiceDate: getData.get('invoice_date')! as string,
        paymentTerm: +getData.get('payment_terms')! as number,
        projectDescription: getData.get('project_description')! as string,
        itemList: {
            itemNames: getData.getAll('itemName') as string[],
            itemQuantities: getData.getAll('itemQty') as string[],
            itemPrices: getData.getAll('itemPrice') as string[]
        }
    }
    const invoices: invoiceDetail[] = JSON.parse(localStorage.invoices);
    if (request.method === 'PATCH') {
        const invoiceId = params.invoiceDetailId!
        const targetIndex = invoices.findIndex(invoice => invoice.id === invoiceId)
        const updatedInvoice = submitForm(data, invoiceId);
        invoices[targetIndex] =  updatedInvoice
        localStorage.invoices = JSON.stringify(invoices);
        return redirect('..')
    }

    if (request.method === 'POST') {
        const invoiceId = generateId()
        const newInvoice = submitForm(data, invoiceId)
        const updatInvoices = JSON.parse(localStorage.invoices).concat(newInvoice)
        localStorage.invoices = JSON.stringify(updatInvoices)
        return redirect(`/invoices/${invoiceId}`)
    }
    return null
} 