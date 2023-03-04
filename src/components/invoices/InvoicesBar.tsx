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
    const invoicesLengthMobile = props.invoiceLength > 1 ? `${props.invoiceLength} invoices` : `${props.invoiceLength} invoice`
    const invoicesLengthDesktop = `There are ${props.invoiceLength > 1 ? `${props.invoiceLength} total invoices` : `${props.invoiceLength} total invoice`}`
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <h1 className='font-bold text-2xl sm:text-4xl'>Invoices</h1>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.95rem] sm:hidden'>{invoicesLengthMobile}</p>
                <p className='dark:text-darkTextGray text-lightTextGray text-[.95rem] hidden sm:flex'>{invoicesLengthDesktop}</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <button onClick={openFilterHandler} className='flex items-center gap-2 font-medium'><span className='sm:hidden'>Filter</span><span className='hidden sm:flex'>Filter by status</span> <RiArrowDownSLine className='text-primaryPurple -mb-[.15rem] text-xl' /></button>
                    {isFilterOpen ? <InvoicesFilter /> : null}
                </div>
                <div>
                    <button onClick={addNewHandler} className='flex items-center gap-2 bg-primaryPurple p-2 rounded-full font-medium text-white hover:bg-primaryPurples-Ligher ease-in-out duration-300 md:py-3 md:px-4'><span className='rounded-full bg-white p-1'><FiPlus className='text-primaryPurple text-lg' /></span><span className='sm:hidden'>New</span><span className='hidden sm:flex'>New Invoice</span></button>
                </div>
            </div>
        </nav>
    )
}

export default InvoicesBar