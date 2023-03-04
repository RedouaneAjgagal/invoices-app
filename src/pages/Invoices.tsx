import InvoicesContainer from '../components/invoices'
import { useContext, useEffect } from 'react'
import FilterStatus from '../store/filter'
import data from '../data/data.json'
import { LoaderFunction } from 'react-router-dom'
import OpenForm from '../store/OpenFormDesktop'
import Form from '../components/invoiceForm/Form'
const Invoices = () => {
    const { filterInvoice } = useContext(FilterStatus)
    const { isOpen, closeForm } = useContext(OpenForm)
    const closeFormHandler = () => {
        closeForm()
    }
    useEffect(() => {
        filterInvoice('reset');
    }, [])
    return (
        <div>
            <InvoicesContainer />
            <div className={`fixed top-0 left-[5.5rem] dark:bg-darkerBlue bg-white z-40 w-full max-w-2xl p-12 drop-shadow shadow-2xl overflow-auto bottom-0 duration-300 ease-in-out ${isOpen.newInvoice ? 'translate-x-0' : '-translate-x-[120%]'}`}>
                <Form buttons={['discard', 'send', 'draft']} action={"post"} />
            </div>
            <div className={`fixed bottom-0 left-[5.5rem] w-full h-full z-30 bg-black/80 ${isOpen.newInvoice ? 'fixed' : 'hidden'}`} onClick={closeFormHandler}></div>
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