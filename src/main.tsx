import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FilterProvider from './store/FilterProvider'
import { OpenFormProvider } from './store/OpenFormDesktop'
import { DeleteInvoiceProvider } from './store/DeleteInvoice'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <OpenFormProvider>
        <DeleteInvoiceProvider>
          <App />
        </DeleteInvoiceProvider>
      </OpenFormProvider>
    </FilterProvider>
  </React.StrictMode>,
)
