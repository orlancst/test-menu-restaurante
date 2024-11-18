
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
import establishments from "./data/establishments.json"

function App() {
  const queryParams = new URLSearchParams(window.location.search)

  // byhours
  // primary: naranja
  // secondary: blanco
  // accent: morado oscuro
  // neutral: morado claro
  const [theme, setTheme] = useState<string>('')
  const [hq, setHq] = useState<string>('')

  const [accessKey, setAccessKey] = useState<string>('')
  
  useEffect(() => {
    const branchCode = queryParams.get('branch')

    const objEstablishment = establishments.find((item) => item.code === branchCode) 

    if (objEstablishment) {
      setTheme(objEstablishment.branch)
      setHq(objEstablishment.hq)
      document.documentElement.setAttribute('data-theme', objEstablishment.branch);
    }

  }, [queryParams])

  return (
    <div className={`bg-accent ${theme === 'carpediem' ? 'font-gillSans' : 'font-montserrat'}`}>


        <CartProvider>
          <BrowserRouter>

            <Routes>
              {/* <Route path='/' element={<Testing />} /> */}
              <Route path='/' element={<MenuContainer theme={theme} hq={hq} />} />
              {/* <Route path='/' element={<UnavailableAccess />} /> */}
              <Route path='/cart' element={<Cart theme={theme} />} />
              <Route path='/verify' element={<Verify theme={theme} setAccessKey={setAccessKey} />} />
              <Route path='/order-summary' element={<OrderSummary theme={theme} accessKey={accessKey} />} />
              <Route path='/order-confirmed' element={<OrderConfirmed theme={theme} />} />
            </Routes>
          </BrowserRouter>

        </CartProvider>



    </div>
  )
}

export default App
