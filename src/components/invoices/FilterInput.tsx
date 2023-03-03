import React, { useContext } from 'react'
import FilterStatus from '../../store/filter'
interface Props {
    name: 'paid' | 'pending' | 'draft'
}

const FilterInput: React.FC<Props> = ({ name }) => {
    const { filterInvoice, isDraft, isPaid, isPending } = useContext(FilterStatus);
    
    const filterStatusHanlder = () => {
        filterInvoice(name)
    }
    let isChecked = false
    if (name === 'paid' && isPaid || name === 'draft' && isDraft || name === 'pending' && isPending) {
        isChecked = true
    }
    return (
        <label htmlFor={name} className='flex gap-2 cursor-pointer font-medium'>
            <input onChange={filterStatusHanlder} type="checkbox" name={name} id={name} checked={isChecked} className='cursor-pointer accent-primaryPurple w-full max-w-[.9rem]' />
            {name}
        </label>
    )
}

export default FilterInput