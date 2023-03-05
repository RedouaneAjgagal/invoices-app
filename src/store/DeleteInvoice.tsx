import React, { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}


const DeleteInoive = createContext({
    isOpen: false,
    openDeleteContainer: () => { },
    closeDeleteContainer: () => { }
});

export const DeleteInvoiceProvider: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDeleteContainer = () => {
        setIsOpen(true)
    }
    const closeDeleteContainer = () => {
        setIsOpen(false)
    }

    const value = {
        isOpen,
        openDeleteContainer,
        closeDeleteContainer
    }

    return <DeleteInoive.Provider value={value}>
        {props.children}
    </DeleteInoive.Provider>
}

export default DeleteInoive