import React, { useContext } from 'react'
import FilterStatus from '../../store/filter'

interface Props {
    name: 'paid' | 'pending' | 'draft'
}

const FilterInput: React.FC<Props> = ({ name }) => {
    const { filterInvoice } = useContext(FilterStatus);
    const filterStatusHanlder = () => {
        filterInvoice(name)
    }
    return (
        <label htmlFor={name} className='flex gap-2 cursor-pointer font-medium'>
            <input onChange={filterStatusHanlder} type="checkbox" name={name} id={name} className='cursor-pointer accent-primaryPurple w-full max-w-[.9rem]' />
            {name}
        </label>
    )
}

export default FilterInput