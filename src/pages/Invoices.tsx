import InvoicesContainer from '../components/invoices'
import { useContext, useEffect } from 'react'
import FilterStatus from '../store/filter'
import data from '../data/data.json'
import { LoaderFunction } from 'react-router-dom'
const Invoices = () => {
    console.log('invoices');
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

export const loader: LoaderFunction = () => {
    if (!localStorage.invoices) {
        localStorage.invoices = JSON.stringify(data)
    }
    return null
}