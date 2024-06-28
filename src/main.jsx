import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/e-food-delivery">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    
   </BrowserRouter>
  
)
