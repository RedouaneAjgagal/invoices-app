import React from 'react'
import { ActionFunction, Form as FormRouter, redirect } from 'react-router-dom'
import Input from './Input'
import ItemListContainer from './ItemListContainer'
import CallToAction from '../../Helpers/CallToAction'
import { invoiceDetail } from '../invoiceDetail/ItemDetail'
import SelectContainer from './SelectContainer'
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
                    <Input id='invoice_date' label='Invoice Date' type='date' defaultValue={editData?.createdAt} disable={action === "patch" ? true : false} />
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
    const data = {
        fromStreetAdress: getData.get('from_street_address')!,
        fromCity: getData.get('from_city')!,
        fromPostCode: getData.get('from_post_code')!,
        fromCountry: getData.get('from_country')!,
        toClientName: getData.get('to_client_name')!,
        toClientEmail: getData.get('to_client_email')!,
        toStreetAddress: getData.get('to_street_address')!,
        toCity: getData.get('to_city')!,
        toPostCode: getData.get('to_post_code')!,
        toCountry: getData.get('to_country')!,
        invoiceDate: getData.get('invoice_date')!,
        paymentTerm: +getData.get('payment_terms')!,
        projectDescription: getData.get('project_description')!,
        itemList: {
            itemNames: getData.getAll('itemName'),
            itemQuantities: getData.getAll('itemQty'),
            itemPrices: getData.getAll('itemPrice')
        }

    }
    if (request.method === 'PATCH') {
        const invoiceId = params.invoiceDetailId
        const invoices: invoiceDetail[] = JSON.parse(localStorage.invoices);
        const updatedInvoices = invoices.map(invoice => {

            if (invoice.id === invoiceId) {
                const updatedItems = data.itemList.itemNames.map((item, index) => {
                    const name = data.itemList.itemNames[index]
                    const price = Number(data.itemList.itemPrices[index])
                    const quantity = Number(data.itemList.itemQuantities[index])
                    const total = quantity * price
                    return { name, price, quantity, total}
                })
                const updatedPy = data.paymentTerm
                const total = updatedItems.reduce((initalState, item) => {
                    return item.total + initalState
                }, 0)
                
                const updatedPaymentDue = new Date(data.invoiceDate.toString());
                updatedPaymentDue.setDate(updatedPaymentDue.getDate() + updatedPy);
                return {
                    ...invoice, senderAddress: {
                        street: data.fromStreetAdress,
                        city: data.fromCity,
                        postCode: data.fromPostCode,
                        country: data.fromCountry
                    },
                    clientName: data.toClientName,
                    clientEmail: data.toClientEmail,
                    clientAddress: {
                        street: data.toStreetAddress,
                        city: data.toCity,
                        postCode: data.toPostCode,
                        country: data.toCountry
                    },
                    createdAt: data.invoiceDate,
                    paymentTerms: data.paymentTerm,
                    description: data.projectDescription,
                    paymentDue: updatedPaymentDue,
                    items: updatedItems,
                    total: total
                }
            } else {
                return invoice
            }
        });
        localStorage.invoices = JSON.stringify(updatedInvoices);
    }
    return redirect('..')
} 