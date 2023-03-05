import InvoicesContainer from '../components/invoices'
import { useContext, useEffect } from 'react'
import FilterStatus from '../store/filter'
import data from '../data/data.json'
import { LoaderFunction } from 'react-router-dom'
import OpenForm from '../store/OpenFormDesktop'
import Form from '../components/invoiceForm/Form'
import Overlay from '../UI/Overlay'
import { createPortal } from 'react-dom'
const Invoices = () => {
    const { filterInvoice } = useContext(FilterStatus)
    const { isOpen, closeForm } = useContext(OpenForm)
    const closeFormHandler = () => {
        closeForm()
    }
    useEffect(() => {
        filterInvoice('reset');
    }, [])

    if (isOpen.newInvoice) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    return (
        <div>
            <InvoicesContainer />
            {createPortal(
                <div>
                    <div className={`hidden lg:grid fixed top-0 left-[5.5rem] dark:text-darkTextGray dark:bg-darkerBlue bg-white z-40 w-full max-w-2xl p-12 drop-shadow shadow-2xl overflow-auto bottom-0 duration-300 ease-in-out ${isOpen.newInvoice ? 'translate-x-0' : '-translate-x-[120%]'}`}>
                        <Form buttons={['discard', 'send', 'draft']} method={"post"} action={"new"} />
                    </div>
                    <Overlay onClick={closeFormHandler} isOpen={isOpen.newInvoice} />
                </div>,
                document.getElementById('overlay')!
            )}
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