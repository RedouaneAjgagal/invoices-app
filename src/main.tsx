import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FilterProvider from './store/FilterProvider'
import { OpenFormProvider } from './store/OpenFormDesktop'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <OpenFormProvider>
        <App />
      </OpenFormProvider>
    </FilterProvider>
  </React.StrictMode>,
)
