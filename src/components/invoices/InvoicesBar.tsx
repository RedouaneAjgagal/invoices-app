import { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FiPlus } from 'react-icons/fi'
import InvoicesFilter from './InvoicesFilter'
import { useNavigate } from 'react-router-dom'

interface Props {
    invoiceLength: number
}

const InvoicesBar: React.FC<Props> = (props) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const navigate = useNavigate();
    const openFilterHandler = () => {
        setIsFilterOpen(prev => !prev);
    }
    const addNewHandler = () => {
        navigate('new');
    }
    const invoicesLength = props.invoiceLength > 1 ? `${props.invoiceLength} invoices` : `${props.invoiceLength} invoice`
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <h1 className='font-bold text-2xl'>Invoices</h1>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.95rem]'>{invoicesLength}</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <button onClick={openFilterHandler} className='flex items-center gap-2 font-medium'>Filter <RiArrowDownSLine className='text-primaryPurple -mb-[.15rem] text-xl' /></button>
                    {isFilterOpen ? <InvoicesFilter /> : null}
                </div>
                <div>
                    <button onClick={addNewHandler} className='flex items-center gap-2 bg-primaryPurple p-2 rounded-full font-medium text-white hover:bg-primaryPurples-Ligher ease-in-out duration-300'><span className='rounded-full bg-white p-1'><FiPlus className='text-primaryPurple text-lg' /></span>New</button>
                </div>
            </div>
        </nav>
    )
}

export default InvoicesBar