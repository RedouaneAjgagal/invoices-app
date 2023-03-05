import { useContext } from 'react'
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'react-router-dom'
import InvoiceInfo from '../components/invoiceDetail'
import { invoiceDetail } from '../components/invoiceDetail/ItemDetail'
import Form from '../components/invoiceForm/Form'
import OpenForm from '../store/OpenFormDesktop'
const InvoiceDetail = () => {
  const { isOpen, closeForm } = useContext(OpenForm)
  const invoiceData = useLoaderData() as invoiceDetail;
  const closeFormHandler = () => {
    closeForm()
  }
  return (
    <div>
      <InvoiceInfo invoiceData={invoiceData} />
      <div className={`hidden lg:grid fixed top-0 left-[5.5rem] dark:bg-darkerBlue bg-white z-40 w-full max-w-2xl p-12 drop-shadow shadow-2xl overflow-auto bottom-0 duration-300 ease-in-out ${isOpen.editInvoice ? 'translate-x-0' : '-translate-x-[120%]'}`}>
        <Form buttons={['cancel', 'send']} editData={invoiceData} method={"patch"} action={"edit"} />
      </div>
      <div className={`fixed bottom-0 left-[5.5rem] w-full h-full z-30 bg-black/80 ${isOpen.editInvoice ? 'fixed' : 'hidden'}`} onClick={closeFormHandler}></div>
    </div>
  )
}

export default InvoiceDetail


export const loader: LoaderFunction = ({ params }) => {
  const targetInvoice = params.invoiceDetailId;
  const invoicesData: invoiceDetail[] = JSON.parse(localStorage.invoices)
  const getInvoice = invoicesData.filter(invoice => invoice.id === targetInvoice);
  const [invoice] = getInvoice;
  return invoice
}


export const action: ActionFunction = async ({ params, request }) => {
  const targetedId = params.invoiceDetailId
  const invoices: invoiceDetail[] = JSON.parse(localStorage.invoices);
  const updatedInvoices = invoices.filter(invoice => invoice.id !== targetedId)
  if (request.method === 'DELETE') {
    localStorage.invoices = JSON.stringify(updatedInvoices)
  }
  return redirect('/invoices')
}