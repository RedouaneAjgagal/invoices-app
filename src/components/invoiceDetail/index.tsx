import Nav from './Nav'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { invoiceDetail } from './ItemDetail'

interface Props {
  invoiceData: invoiceDetail,
}

const InvoiceInfo: React.FC<Props> = ({ invoiceData }) => {

  return (
    <div className='flex flex-col gap-6'>
      <Nav />
      <ItemDetail details={invoiceData} />
    </div>
  )
}

export default InvoiceInfo