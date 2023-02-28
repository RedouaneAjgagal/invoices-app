import Nav from './Nav'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { invoiceDetail } from './ItemDetail'
const InvoiceInfo = () => {
  const params = useParams();
  const targetInvoice = params.invoiceDetailId;
  const invoicesData: invoiceDetail[] = JSON.parse(localStorage.invoices)
  const getInvoice = invoicesData.filter(invoice => invoice.id === targetInvoice);
  const [invoice] = getInvoice;
  return (
    <div className='flex flex-col gap-6'>
      <Nav />
      <ItemDetail details={invoice} />
    </div>
  )
}

export default InvoiceInfo