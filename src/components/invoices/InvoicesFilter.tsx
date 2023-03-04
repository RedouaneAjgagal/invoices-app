import FilterInput from './FilterInput';

const InvoicesFilter = () => {
    
    return (
        <div className='absolute left-[-50%] top-10 dark:bg-darkBlue bg-white p-4 w-44 rounded-lg shadow-lg drop-shadow-2xl flex-col gap-1 select-none sm:left-[-25%] sm:w-48'>
            <FilterInput name='paid' />
            <FilterInput name='pending' />
            <FilterInput name='draft' />
        </div>
    )
}

export default InvoicesFilter