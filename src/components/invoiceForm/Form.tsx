import React from 'react'
import Input from './Input'
import ItemListContainer from './ItemListContainer'
import CallToAction from '../../Helpers/CallToAction'
const Form = () => {
    return (
        <>
            <h1 className='font-medium text-3xl'>New Invoice</h1>
            <form className='flex flex-col gap-8 pb-20'>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill From</h3>
                    <Input id='from_street_address' label='Steet Address' type='text' />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input id='from_city' label='City' type='text' />
                        <Input id='from_post_code' label='Post Code' type='text' />
                    </div>
                    <Input id='from_country' label='Country' type='text' />
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='dark:text-purple-500 text-purple-600 font-medium tracking-wide'>Bill To</h3>
                    <Input id='to_client_name' label="Client's Name" type='text' />
                    <Input id='to_client_email' label="Client's Email" type='email' />
                    <Input id='to_street_address' label='Steet Address' type='text' />
                    <div className='grid grid-cols-2 gap-6 justify-between items-center'>
                        <Input id='to_city' label='City' type='text' />
                        <Input id='to_post_code' label='Post Code' type='text' />
                    </div>
                    <Input id='to_country' label='Country' type='text' />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input id='invoice_date' label='Invoice Date' type='date' />
                    <Input id='payment_terms' label='Payment Terms' type='number' value={1} select={true} />
                    <Input id='project_description' label='Project Description' type='text' />
                </div>
                <ItemListContainer />
                <CallToAction buttons={['discard', 'send', 'draft']} />
            </form>
        </>
    )
}

export default Form