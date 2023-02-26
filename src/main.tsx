import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FilterProvider from './store/FilterProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
)
