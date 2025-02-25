import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/pages/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
