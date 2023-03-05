import { useContext } from 'react'
import { createPortal } from 'react-dom'
import Overlay from '../../UI/Overlay'
import { useParams, useSubmit } from 'react-router-dom'
import DeleteInoive from '../../store/DeleteInvoice'
const Delete = () => {
    const { closeDeleteContainer, isOpen } = useContext(DeleteInoive)
    const params = useParams()
    const targetId = params.invoiceDetailId
    const submit = useSubmit()
    const deleteInvoiceHandler = () => {
        submit(null, { method: 'delete' })
        closeDeleteContainer()
    }
    const cancel = () => {
        closeDeleteContainer()
    }
    return (
        createPortal(
            <div>
                <section className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 dark:bg-darkBlue bg-white w-full max-w-md z-50 p-10 rounded flex flex-col gap-6 shadow-lg lg:left-[52.5%]'>
                    <h2 className='text-3xl font-medium dark:text-white'>Confirm Deletion</h2>
                    <p className='dark:text-darkTextGray text-lightTextGray'>Are you sure you want to delete invoice #{targetId}? This action cannot be undone.</p>
                    <div className='flex justify-end items-center font-medium'>
                        <button onClick={cancel} className='mx-1 py-3 dark:bg-slate-600/10 bg-slate-200  h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-lightDarkBlue w-28 order-3 dark:text-white hover:bg-slate-300 hover:dark:bg-white hover:dark:text-slate-800 '>Cancel</button>
                        <button onClick={deleteInvoiceHandler} className='mx-1 py-3 dark:bg-red-500 bg-red-500/90 dark:hover:bg-red-700 hover:bg-red-400 h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-white w-28 order-3'>Delete</button>
                    </div>
                </section>
                <Overlay onClick={cancel} isOpen={isOpen} delete={true} />
            </div>,
            document.getElementById('overlay')!
        )
    )
}

export default Delete