import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Home from './pages/Home';
import Invoices from './pages/Invoices';
import InvoiceDetail from './pages/InvoiceDetail';
import NewInvoices from './pages/NewInvoices';
import EditInvoice from './pages/EditInvoice';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'invoices',
          children: [
            {
              index: true,
              element: <Invoices />
            },
            {
              path: ':invoiceDetailId',
              children: [
                {
                  index: true,
                  element: <InvoiceDetail />
                },
                {
                  path: 'edit',
                  element: <EditInvoice />,
                },
              ]
            },
            {
              path: 'new',
              element: <NewInvoices />
            },
          ]
        },
      ]
    }
  ])
  return (
    <div className="flex min-h-screen dark:bg-darkerBlue dark:text-white bg-lightGray text-slate-800 flex-col gap-8">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;