import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/styles/style.scss'
import { BrowserRouter } from 'react-router'
import ProductsProvider from './context/ProductsProvider.jsx'
import CartProvider from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </StrictMode>
  </BrowserRouter>
)
