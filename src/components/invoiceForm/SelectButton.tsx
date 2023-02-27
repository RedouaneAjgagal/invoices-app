import React from 'react'

interface Props {
    value: number,
    onSelect: (value: number) => void
}

const SelectButton: React.FC<Props> = (props) => {
    const selectHandler = () => {
        props.onSelect(props.value);
    }
    const title = props.value === 1 ? `Net ${props.value} Day` : `Net ${props.value} Days`
    return (
        <button onClick={selectHandler} type='button' className='w-full text-left p-3 hover:text-primaryPurple duration-200 ease-in-out dark:text-darkTextGray text-darkBlue'>{title}</button>
    )
}

export default SelectButton 