import { redirect } from 'react-router-dom'
import InvoiceForm from '../components/invoiceForm'

const NewInvoices = () => {
  return (
    <div>
      <InvoiceForm />
    </div>
  )
}

export default NewInvoices

export const loader = () => {
  if (window.innerWidth > 1024) {
    return redirect('/invoices')
  }
  return null
}