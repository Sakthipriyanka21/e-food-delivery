import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename="/e-food-delivery">
  <StoreContextProvider>
  <App />
  </StoreContextProvider>
   
   </HashRouter>
  
)
