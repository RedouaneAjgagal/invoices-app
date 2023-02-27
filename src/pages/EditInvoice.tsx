import React from 'react'
import { json, LoaderFunction } from 'react-router-dom'
import EditContainer from '../components/editInvoice'
import data from '../data/data.json'

const EditInvoice = () => {
  return (
    <EditContainer />
  )
}

export default EditInvoice

export const loader: LoaderFunction = ({ params }) => {
  const id = params.invoiceDetailId
  const getInvoice = data.filter(invoice => {
    return invoice.id === id
  });
  if (getInvoice.length === 0) {
    throw json({ errorMsg: 'Could not load the targeted invoice!' }, { status: 500 });
  }
  const [invoiceDetail] = getInvoice;
  return invoiceDetail
}