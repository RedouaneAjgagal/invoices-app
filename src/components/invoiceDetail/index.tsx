import Nav from './Nav'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { invoiceDetail } from './ItemDetail'
import DeleteInoive from '../../store/DeleteInvoice'
import Delete from './Delete'
import { useContext } from 'react'

interface Props {
  invoiceData: invoiceDetail,
}

const InvoiceInfo: React.FC<Props> = ({ invoiceData }) => {
  const { isOpen } = useContext(DeleteInoive);

  return (
    <div className='flex flex-col gap-6'>
      <Nav />
      <ItemDetail details={invoiceData} />
      {isOpen ? <Delete /> : null}
    </div>
  )
}

export default InvoiceInfo