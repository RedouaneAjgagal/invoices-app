import React from 'react'

const CallToAction = () => {
    return (
        <div className='fixed bottom-0 left-0 z-30 dark:bg-darkBlue w-full h-20 px-4 flex justify-between items-center font-medium'>
            <button className='w-[48%] h-[60%] dark:bg-slate-600/10 rounded-full hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out'>Edit</button>
            <button className='w-[48%] h-[60%] bg-red-500 rounded-full hover:bg-red-700 duration-300 ease-in-out'>Delete</button>
        </div>
    )
}

export default CallToAction