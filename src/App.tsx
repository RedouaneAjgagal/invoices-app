import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import Root from './pages/Root';
import Home, { loader as initialLoad} from './pages/Home';
import Invoices, {loader as loadInvoices} from './pages/Invoices';
import InvoiceDetail, {action as deleteInoive, loader as targetInvoice} from './pages/InvoiceDetail';
// import  {action as deleteInvoice} from './Helpers/CallToAction';
import NewInvoices from './pages/NewInvoices';
import EditInvoice, { loader as getInvoiceDetail } from './pages/EditInvoice';
import Error from './pages/Error';
import { action as submitFormAction } from './components/invoiceForm/Form';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: initialLoad
        },
        {
          path: 'invoices',
          // action: deleteInvoice,
          children: [
            {
              index: true,
              element: <Invoices />,
              loader: loadInvoices
            },
            {
              path: ':invoiceDetailId',
              children: [
                {
                  index: true,
                  element: <InvoiceDetail />,
                  action: deleteInoive,
                  loader: targetInvoice
                },
                {
                  path: 'edit',
                  element: <EditInvoice />,
                  loader: getInvoiceDetail,
                  action: submitFormAction
                },
              ]
            },
            {
              path: 'new',
              element: <NewInvoices />,
              action: submitFormAction
            },
          ]
        },
      ]
    }
  ])
  return (
    <div className="flex min-h-screen dark:bg-darkerBlue dark:text-white bg-lightGray text-slate-800 flex-col">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;