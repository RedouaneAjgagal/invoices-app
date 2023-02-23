import React from 'react'

const Info = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <span className='font-medium text-primaryPurple'>#<span className='text-white'>RT3080</span></span>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Re-branding</p>
            </div>
            <div>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>19 Union 19 Union Terrace</p>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>London</p>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>E1 3EZ</p>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>United Kingdom</p>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Invoice Date</p>
                            <h2 className='font-medium text-xl'>18 Aug 2021</h2>
                        </div>
                        <div>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Payment Due</p>
                            <h2 className='font-medium text-xl'>19 Aug 2021</h2>
                        </div>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <p className='dark:text-darkTextGray text-lightTextGray'>Bill To</p>
                            <h2 className='font-medium text-xl'>Jensen Huang</h2>
                        </div>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>106 Kendell Street</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>Sharrington</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>NR24 5WQ</p>
                        <p className='dark:text-darkTextGray text-lightTextGray text-[.9rem]'>United Kingdom</p>
                    </div>
                </div>
                <div>
                    <p className='dark:text-darkTextGray text-lightTextGray'>Sent to</p>
                    <h2 className='font-medium text-xl'>jensenh@mail.com</h2>
                </div>
            </div>
        </div>
    )
}

export default Info