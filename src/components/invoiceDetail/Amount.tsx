import React from 'react'

const Amount = () => {
  return (
    <div className='dark:bg-slate-600/10 rounded'>
        <div className='px-4 h-24 flex justify-between items-center font-medium'>
            <div>
                <h1>Brand Guidelines</h1>
                <p className='dark:text-darkTextGray'>1x $1,800.90</p>
            </div>
            <div>
                <span>$1,800.90</span>
            </div>
        </div>
        <div className='px-4 h-24 dark:bg-black/75 flex justify-between items-center rounded-b'>
            <p className='text-[.9rem]'>Amount Due</p>
            <span className='font-medium text-2xl'>$1,800.90</span>
        </div>
    </div>
  )
}

export default Amount