import React from 'react'
import Nav from './Nav'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import data from '../../data/data.json';
const InvoiceInfo = () => {
  const params = useParams();
  const targetInvoice = params.invoiceDetailId;
  const getInvoice = data.filter(invoice => invoice.id === targetInvoice);
  const [invoice] = getInvoice;
  return (
    <div className='flex flex-col gap-6'>
      <Nav />
      <ItemDetail details={invoice} />
    </div>
  )
}

export default InvoiceInfo