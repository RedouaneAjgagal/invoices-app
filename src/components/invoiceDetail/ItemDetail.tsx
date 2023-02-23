import React from 'react'
import Status from '../../Helpers/Status'
import Amount from './Amount'
import Info from './Info'
import CallToAction from './CallToAction'

const ItemDetail = () => {
    return (
        <section className='flex flex-col gap-4 pb-20'>
            <div className='p-4 dark:bg-darkBlue bg-white rounded'>
                <div className='flex justify-between items-center'>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Status</p>
                    <Status status='Paid' />
                </div>
                <CallToAction />
            </div>
            <article className='p-4 dark:bg-darkBlue bg-white rounded flex flex-col gap-8'>
                <Info />
                <Amount />
            </article>
        </section>
    )
}

export default ItemDetail