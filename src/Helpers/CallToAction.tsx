import React from 'react'

interface Props {
    buttons: ['edite' | 'cancel' | 'discard', 'delete' | 'send', 'draft'?];
}

const CallToAction: React.FC<Props> = (props) => {
    let width = props.buttons.length === 2 ? 'w-[48%]' : 'w-[32%]';
    const getSecondaryBtn = props.buttons[0];
    const secondaryBtn = `${getSecondaryBtn.slice(0, 1).toUpperCase()}${getSecondaryBtn.slice(1)}`;
    const getSubmitBtn = props.buttons[1];
    const submitBtn = getSubmitBtn === 'send' ? 'Save & Send' : 'Delete'
    return (
        <div className='fixed bottom-0 left-0 z-30 dark:bg-darkBlue w-full h-20 px-4 flex justify-between items-center font-medium'>
            <button className={`${width} h-[60%] dark:bg-slate-600/10 rounded-full hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out text-[.95rem]`}>{secondaryBtn}</button>
            {props.buttons.length === 3 && <button className={`${width} h-[60%] bg-gray-700 rounded-full hover:bg-gray-600 duration-300 ease-in-out text-[.95rem]`}>Save as Draft</button>}
            <button className={`${width} h-[60%] bg-red-500 rounded-full hover:bg-red-700 duration-300 ease-in-out text-[.95rem]`}>{submitBtn}</button>
        </div>
    )
}

export default CallToAction