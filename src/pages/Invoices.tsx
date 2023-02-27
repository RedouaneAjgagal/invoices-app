import InvoicesContainer from '../components/invoices'
import { useContext, useEffect } from 'react'
import FilterStatus from '../store/filter'
const Invoices = () => {
    const { filterInvoice } = useContext(FilterStatus)
    useEffect(() => {
        filterInvoice('reset');
    }, [])
    return (
        <div>
            <InvoicesContainer />
        </div>
    )
}

export default Invoices