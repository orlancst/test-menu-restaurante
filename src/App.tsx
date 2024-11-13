
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Testing from './components/Testing';
import MenuContainer from './components/MenuContainer';
import Cart from './components/Cart';
import Verify from './components/Verify';
import OrderSummary from './components/OrderSummary';
import OrderConfirmed from './components/OrderConfirmed';
import { CartProvider } from './context/CartContext';
import { useEffect, useState } from 'react';

function App() {

  // byhours
  // primary: naranja
  // secondary: blanco
  // accent: morado oscuro
  // neutral: morado claro
  const [theme, setTheme] = useState<string | null>('')

  

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme')

    setTheme(currentTheme)
  }, [])

  return (
    <div className={`bg-accent ${theme === 'carpediem' ? 'font-gillSans' : 'font-montserrat'}`}>
      <CartProvider>
        <BrowserRouter>

          <Routes>
            {/* <Route path='/' element={<Testing />} /> */}
            <Route path='/' element={<MenuContainer />} />
            {/* <Route path='/' element={<UnavailableAccess />} /> */}
            <Route path='/cart' element={<Cart />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/order-summary' element={<OrderSummary />} />
            <Route path='/order-confirmed' element={<OrderConfirmed />} />
          </Routes>
        </BrowserRouter>

      </CartProvider>
    </div>
  )
}

export default App
