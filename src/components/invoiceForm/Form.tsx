import React, { useState, useEffect } from 'react'
import { ActionFunction, useFetcher, redirect, useActionData } from 'react-router-dom'
import Input, { inputErrors } from './Input'
import ItemListContainer from './ItemListContainer'
import CallToAction from '../../Helpers/CallToAction'
import { invoiceDetail } from '../invoiceDetail/ItemDetail'
import SelectContainer from './SelectContainer'
import { generateId } from '../../utils/generateId'
import { submitForm } from '../../utils/submitForm'

interface Props {
    buttons: ['cancel' | 'discard', 'send', 'draft'?];
    editData?: invoiceDetail,
    action: "get" | "post" | "put" | "delete" | "patch"
}

const Form: React.FC<Props> = ({ buttons, editData, action }) => {
    const fetcher = useFetcher()
    const itemsListError = fetcher.data?.itemsList
    const infoErrors = fetcher.data?.formData
    const [isDiscard, setIsDiscard] = useState<boolean>(false)
    useEffect(() => {
        setIsDiscard(false)
    }, [infoErrors])

    const discardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.form
        if (form) {
            form.reset()
        }
        setIsDiscard(true)
    }
    return (
        <>
            {editData?.id ?
                <h1 className='font-medium text-3xl'>Edit <span className='dark:text-purple-500 text-purple-600'>#</span>{editData.id}</h1>
                :
                <h1 className='font-medium text-3xl'>New Invoice</h1>
            }
            <fetcher.Form method={action} action={'/invoices/new'} className='flex flex-col gap-8 pb-20 sm:pb-0' noValidate>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill From</h3>
                    <Input errors={isDiscard ? [] : infoErrors} id='from_street_address' label='Steet Address' type='text' defaultValue={editData?.senderAddress.street} />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input errors={isDiscard ? [] : infoErrors} id='from_city' label='City' type='text' defaultValue={editData?.senderAddress.city} />
                        <Input errors={isDiscard ? [] : infoErrors} id='from_post_code' label='Post Code' type='text' defaultValue={editData?.senderAddress.postCode} />
                    </div>
                    <Input errors={isDiscard ? [] : infoErrors} id='from_country' label='Country' type='text' defaultValue={editData?.senderAddress.country} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill To</h3>
                    <Input errors={isDiscard ? [] : infoErrors} id='to_client_name' label="Client's Name" type='text' defaultValue={editData?.clientName} />
                    <Input errors={isDiscard ? [] : infoErrors} id='to_client_email' label="Client's Email" type='email' defaultValue={editData?.clientEmail} />
                    <Input errors={isDiscard ? [] : infoErrors} id='to_street_address' label='Steet Address' type='text' defaultValue={editData?.clientAddress.street} />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input errors={isDiscard ? [] : infoErrors} id='to_city' label='City' type='text' defaultValue={editData?.clientAddress.city} />
                        <Input errors={isDiscard ? [] : infoErrors} id='to_post_code' label='Post Code' type='text' defaultValue={editData?.clientAddress.postCode} />
                    </div>
                    <Input errors={isDiscard ? [] : infoErrors} id='to_country' label='Country' type='text' defaultValue={editData?.clientAddress.country} />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input errors={isDiscard ? [] : infoErrors} id='invoice_date' label='Invoice Date' type='date' defaultValue={editData?.createdAt} action={action} />
                    <SelectContainer id='payment_terms' label='Payment Terms' defaultValue={editData?.paymentTerms} />
                    <Input errors={isDiscard ? [] : infoErrors} id='project_description' label='Project Description' type='text' defaultValue={editData?.description} />
                </div>
                <ItemListContainer items={editData?.items} discard={isDiscard} />
                <CallToAction buttons={buttons} onDiscard={discardHandler} />
            </fetcher.Form>
        </>
    )
}

export default Form


export const action: ActionFunction = async ({ request, params }) => {
    
    const getData = await request.formData();
    
    
    const data = {
        from_street_address: getData.get('from_street_address') as string,
        from_city: getData.get('from_city') as string,
        from_post_code: getData.get('from_post_code') as string,
        from_country: getData.get('from_country') as string,
        to_client_name: getData.get('to_client_name') as string,
        to_client_email: getData.get('to_client_email') as string,
        to_street_address: getData.get('to_street_address') as string,
        to_city: getData.get('to_city') as string,
        to_post_code: getData.get('to_post_code') as string,
        to_country: getData.get('to_country') as string,
        invoice_date: getData.get('invoice_date') as string,
        payment_terms: getData.get('payment_terms') as string,
        project_description: getData.get('project_description') as string,
    }
    
    const formDataErrors = Object.entries(data).map((obj) => {
        const property = obj[0]
        const value = obj[1]

        if (property === 'to_client_email') {
            const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            if (!isValidEmail) {
                return property
            }
        }
        if (value.trim().length === 0) {
            return property
        }
    }).filter(Boolean)

    const itemsList = {
        itemNames: getData.getAll('itemName') as string[],
        itemQuantities: getData.getAll('itemQty') as string[],
        itemPrices: getData.getAll('itemPrice') as string[]
    }

    // Add a new Draft invoice
    const draftBtn = getData.get('middleBtn')
    if (draftBtn === 'Save as Draft' && request.method === 'POST') {
        const invoiceId = generateId()
        const newInvoice = submitForm(data, invoiceId, itemsList, 'draft')
        const updatInvoices = JSON.parse(localStorage.invoices).concat(newInvoice)
        localStorage.invoices = JSON.stringify(updatInvoices)
        return redirect(`/invoices/${invoiceId}`)
    }

    const itemsError = itemsList.itemNames.map((item, index) => {
        let errors = []
        const name = itemsList.itemNames[index]
        const price = Number(itemsList.itemPrices[index])
        const quantity = Number(itemsList.itemQuantities[index])
        if (name.trim().length === 0) {
            errors.push('itemName')
        }
        if (price <= 0) {
            errors.push('itemPrice')
        }
        if (quantity < 1) {
            errors.push('itemQty')
        }
        return { emptyInputs: errors, index }
    })
    const checkErrors = itemsError.filter(item => item.emptyInputs.length > 0)


    if (formDataErrors.length || checkErrors.length) {
        return { formData: formDataErrors, itemsList: itemsError }
    }
    // edit an existing invoice
    if (request.method === 'PATCH') {
        const invoices: invoiceDetail[] = JSON.parse(localStorage.invoices);
        const invoiceId = params.invoiceDetailId!
        const targetIndex = invoices.findIndex(invoice => invoice.id === invoiceId)
        const updatedInvoice = submitForm(data, invoiceId, itemsList);
        invoices[targetIndex] = updatedInvoice
        localStorage.invoices = JSON.stringify(invoices);
        return redirect('..')
    }
    // add a new invoice
    if (request.method === 'POST') {
        const invoiceId = generateId()
        const newInvoice = submitForm(data, invoiceId, itemsList)
        const updatInvoices = JSON.parse(localStorage.invoices).concat(newInvoice)
        localStorage.invoices = JSON.stringify(updatInvoices)
        return redirect(`/invoices/${invoiceId}`)
    }
    return null
} 