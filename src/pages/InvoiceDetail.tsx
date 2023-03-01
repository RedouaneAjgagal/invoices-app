import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'react-router-dom'
import InvoiceInfo from '../components/invoiceDetail'
import { invoiceDetail } from '../components/invoiceDetail/ItemDetail'
const InvoiceDetail = () => {
  
  const invoiceData = useLoaderData() as invoiceDetail;

  return (
    <div>
      <InvoiceInfo invoiceData={invoiceData} />
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