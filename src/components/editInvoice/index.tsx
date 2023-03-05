import BackButton from '../../UI/BackButton'
import Form from '../invoiceForm/Form'
import { useLoaderData } from 'react-router-dom'
import { invoiceDetail } from '../invoiceDetail/ItemDetail'
const EditContainer = () => {
    const invoiceDetail = useLoaderData() as invoiceDetail;
    
    return (
        <div className='flex flex-col gap-6'>
            <nav>
                <BackButton />
            </nav>
            <Form buttons={['cancel', 'send']} editData={invoiceDetail} method={"patch"} action={""} />
        </div>
    )
}

export default EditContainer