import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    buttons: ['edit' | 'cancel' | 'discard', 'delete' | 'send', 'draft'?];
}

const CallToAction: React.FC<Props> = (props) => {
    let width = props.buttons.length === 2 ? 'w-[48%]' : 'w-[32%]';
    const getSecondaryBtn = props.buttons[0];
    const secondaryBtn = `${getSecondaryBtn.slice(0, 1).toUpperCase()}${getSecondaryBtn.slice(1)}`;
    const getSubmitBtn = props.buttons[1];
    const submitBtn = getSubmitBtn === 'delete' ? 'Delete' : 'Save & Send';

    const navigate = useNavigate();

    const editNavigate = () => {
        return navigate('edit')
    }

    const discardHandler = () => {
        return navigate('..')
    }


    return (
        <div className='fixed bottom-0 left-0 z-30 dark:bg-darkBlue bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] w-full h-20 px-4 flex justify-between items-center font-medium'>
            <button type='button' onClick={getSecondaryBtn === 'edit' ? editNavigate : discardHandler} className={`${width} h-[60%] dark:bg-slate-600/10 bg-slate-200 hover:bg-slate-300 rounded-full hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out text-[.95rem]`}>{secondaryBtn}</button>
            {props.buttons.length === 3 && <button className={`${width} h-[60%] bg-gray-700 text-white rounded-full hover:bg-gray-600 duration-300 ease-in-out text-[.95rem]`}>Save as Draft</button>}
            <button type="submit" className={`${width} ${getSubmitBtn === 'send' ? 'bg-primaryPurple hover:bg-primaryPurples-Ligher' : 'dark:bg-red-500 bg-red-500/90 dark:hover:bg-red-700 hover:bg-red-400'} h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-white`}>{submitBtn}</button>
        </div>
    )
}

export default CallToAction

