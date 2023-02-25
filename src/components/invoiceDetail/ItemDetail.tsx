import React from 'react'
import Status from '../../Helpers/Status'
import Amount from './Amount'
import Info from './Info'
import CallToAction from '../../Helpers/CallToAction'

const ItemDetail = () => {
    return (
        <section className='flex flex-col gap-4 pb-20'>
            <div className='p-4 dark:bg-darkBlue bg-white rounded shadow-lg dark:shadow-black/20 shadow-slate-200/50'>
                <div className='flex justify-between items-center'>
                    <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Status</p>
                    <Status status='Paid' />
                </div>
                <CallToAction buttons={['edite', 'delete']} />
            </div>
            <article className='p-4 dark:bg-darkBlue bg-white rounded flex flex-col gap-8 shadow-lg dark:shadow-black/20 shadow-slate-200/50'>
                <Info />
                <Amount />
            </article>
        </section>
    )
}

export default ItemDetail