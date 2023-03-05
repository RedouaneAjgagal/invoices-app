import { useContext } from 'react';
import { useNavigate, useParams, useSubmit } from 'react-router-dom'
import { invoiceDetail } from '../components/invoiceDetail/ItemDetail';
import OpenForm from '../store/OpenFormDesktop';

interface Props {
    buttons: ['edit' | 'cancel' | 'discard', 'delete' | 'send', 'draft'?];
    status?: 'paid' | 'pending' | 'draft',
    onDiscard?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CallToAction: React.FC<Props> = (props) => {
    const { closeForm, openEditInvoiceForm } = useContext(OpenForm)
    const getSecondaryBtn = props.buttons[0];
    const secondaryBtn = `${getSecondaryBtn.slice(0, 1).toUpperCase()}${getSecondaryBtn.slice(1)}`;
    const getSubmitBtn = props.buttons[1];
    const submitBtn = getSubmitBtn === 'delete' ? 'Delete' : 'Save & Send';
    const submit = useSubmit()
    const navigate = useNavigate();

    const params = useParams()
    const invoiceId = params.invoiceDetailId
    const invoicesData: invoiceDetail[] = JSON.parse(localStorage.invoices)
    const [targetedInvoice] = invoicesData.filter(invoice => invoice.id === invoiceId)

    const editNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.value === 'secondaryBtn-mobile') {
            return navigate('edit')
        } else {
            openEditInvoiceForm()
        }
    }
    const discardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onDiscard) {
            props.onDiscard(e);
        }
    }

    const cancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.value === 'secondaryBtn-mobile') {
            return navigate('..')
        } else {
            closeForm()
        }
    }

    const markPaidHandler = () => {
        const updatedInvoices = invoicesData.map(invoice => {
            if (invoice.id === invoiceId) {
                return { ...invoice, status: 'paid' }
            } else {
                return invoice
            }
        })
        localStorage.invoices = JSON.stringify(updatedInvoices)
        navigate('')
    }
    const deleteHandler = () => {
        const confirm = window.confirm(`Are you sure you want to delete invoice #${targetedInvoice.id}`)
        if (confirm) submit(null, { method: 'delete' })
    }

    let secondaryBtnAction
    if (getSecondaryBtn === 'edit') {
        secondaryBtnAction = editNavigate
    } else if (getSecondaryBtn === 'discard') {
        secondaryBtnAction = discardHandler
    } else {
        secondaryBtnAction = cancelHandler
    }

    return (
        <div className='fixed bottom-0 left-0 z-30 dark:bg-darkBlue bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] w-full h-20 px-4 flex justify-between items-center font-medium sm:static sm:drop-shadow-none sm:px-0 sm:dark:bg-transparent sm:bg-transparent sm:justify-end'>
            <button type='button' onClick={secondaryBtnAction} className={`w-full h-[60%] mx-1 dark:bg-slate-600/10 bg-slate-200 hover:bg-slate-300 rounded-full hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out text-[.95rem] sm:w-28 lg:hidden`} value={'secondaryBtn-mobile'}>{secondaryBtn}</button>
            {/* Secondary btn for desktop */}
            <button type='button' onClick={secondaryBtnAction} className={`w-full h-[60%] mx-1 dark:bg-slate-600/10 bg-slate-200 hover:bg-slate-300 rounded-full hover:dark:bg-white hover:dark:text-primaryPurple duration-300 ease-in-out text-[.95rem] lg:w-28 hidden lg:flex lg:justify-center lg:items-center`} value={'secondaryBtn-desktop'} >{secondaryBtn}</button>
            {/* end Secondary btn for desktop */}
            {props.buttons.length === 3 && <button name='middleBtn' value={'Save as Draft'} className={`w-full m-1 h-[60%] bg-gray-700 text-white rounded-full hover:bg-gray-600 duration-300 ease-in-out text-[.95rem] sm:w-28`}>Save as Draft</button>}
            {getSubmitBtn === 'delete' ?
                <button onClick={deleteHandler} type="submit" className='w-full mx-1 dark:bg-red-500 bg-red-500/90 dark:hover:bg-red-700 hover:bg-red-400 h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-white sm:w-28'>{submitBtn}</button>
                :
                <button type="submit" className='w-full mx-1 bg-primaryPurple hover:bg-primaryPurples-Ligher  h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-white sm:w-28' >{submitBtn}</button>
            }
            {props.status === 'pending' &&
                <button onClick={markPaidHandler} type="submit" className={`w-full mx-1 dark:bg-primaryPurple bg-indigo-600 dark:hover:bg-indigo-600 hover:bg-primaryPurple h-[60%] rounded-full duration-300 ease-in-out text-[.95rem] text-white sm:w-28`}>Mark as paid</button>
            }
        </div>
    )
}

export default CallToAction
