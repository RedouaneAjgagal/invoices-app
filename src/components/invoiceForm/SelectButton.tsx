import React from 'react'

interface Props {
    title: string,
    onSelect: (title: string) => void
}

const SelectButton: React.FC<Props> = (props) => {
    const selectHandler = () => {
        props.onSelect(props.title);
    }
    return (
        <button onClick={selectHandler} type='button' className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out'>{props.title}</button>
    )
}

export default SelectButton