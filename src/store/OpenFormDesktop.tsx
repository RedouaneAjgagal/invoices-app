import { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}


const OpenForm = createContext({
    isOpen: {
        newInvoice: false,
        editInvoice: false
    },
    openNewInvoiceForm: () => { },
    closeForm: () => {},
    openEditInvoiceForm: () => { },
});

export const OpenFormProvider: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState({
        newInvoice: false,
        editInvoice: false
    });
    const openNewInvoiceForm = () => {
        setIsOpen({ newInvoice: true, editInvoice: false });
    }
    const openEditInvoiceForm = () => {
        setIsOpen({ newInvoice: false, editInvoice: true });
    }
    const closeForm = () => {
        setIsOpen({ newInvoice: false, editInvoice: false });
    }

    const value = {
        isOpen,
        openNewInvoiceForm,
        openEditInvoiceForm,
        closeForm
    }

    return <OpenForm.Provider value={value}>
        {props.children}
    </OpenForm.Provider>
}

export default OpenForm;