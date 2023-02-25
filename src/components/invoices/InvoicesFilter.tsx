import React from 'react'

const InvoicesFilter = () => {
    return (
        <form className='absolute left-[-50%] top-10 dark:bg-darkBlue bg-white p-4 w-44 rounded-lg shadow-lg drop-shadow-2xl flex-col gap-1 select-none'>
            <label htmlFor="paid" className='flex gap-2 cursor-pointer font-medium'>
                <input type="checkbox" name="paid" id="paid" className='cursor-pointer accent-primaryPurple w-full max-w-[.9rem]' />
                Paid
            </label>
            <label htmlFor="pending" className='flex gap-2 cursor-pointer font-medium'>
                <input type="checkbox" name="pending" id="pending" className='cursor-pointer accent-primaryPurple w-full max-w-[.9rem]' />
                Pending
            </label>
            <label htmlFor="draft" className='flex gap-2 cursor-pointer font-medium'>
                <input type="checkbox" name="draft" id="draft" className='cursor-pointer accent-primaryPurple w-full max-w-[.9rem]  ' />
                Draft
            </label>
        </form>
    )
}

export default InvoicesFilter