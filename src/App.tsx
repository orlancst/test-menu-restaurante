
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuContainer from './components/MenuContainer';
import Cart from './components/Cart';
import Verify from './components/Verify';
import OrderSummary from './components/OrderSummary';
import OrderConfirmed from './components/OrderConfirmed';
import { CartProvider } from './context/CartContext';
import { useEffect, useState } from 'react';
import establishments from "./data/establishments.json"
import establishments2 from "./data/establishments2.json"
import { DeliveryPoint } from './types';



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
  const [deliveryPoint, setDeliveryPoint] = useState<DeliveryPoint | null>(null)

  useEffect(() => {
    const branchCode = queryParams.get('branch')
    const roomNumber = queryParams.get('room')
    const theme:unknown = queryParams.get('theme')
    const objEstablishment = establishments2.find((item) => item.hash === branchCode)

    let branch = 'byhours';

    if (objEstablishment) {
      if (theme && (theme as string === '1' || theme as string === '2')) {
        branch = objEstablishment.line[theme as number].toLowerCase().replace(" ", "")
        setTheme(branch)

      }
      setHq(objEstablishment.name)

      setDeliveryPoint({
        establishmentId: objEstablishment.id,
        roomNumber,
      })

      document.documentElement.setAttribute('data-theme', branch);
      document.title = `Menú Restaurante | ${theme as string === '2' ? 'Motel' : 'Hotel'} ${objEstablishment.line[theme as number]} ${objEstablishment.name}`
      const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']")
      if (link) {
        link.href = `/${branch}.svg`
      }
    }

  }, [establishments, queryParams.get('branch'), queryParams.get('room'), queryParams.get('theme')])

  // useEffect(() => {
  //   const branchCode = queryParams.get('branch')
  //   const roomNumber = queryParams.get('room')
  //   const objEstablishment = establishments.find((item) => item.code === branchCode)

  //   if (objEstablishment) {
  //     setTheme(objEstablishment.branch)
  //     setHq(objEstablishment.hq)

  //     setDeliveryPoint({
  //       establishmentId: objEstablishment.id,
  //       roomNumber,
  //     })

  //     document.documentElement.setAttribute('data-theme', objEstablishment.branch);
  //     document.title = `Menú Restaurante | ${objEstablishment.fullname}`
  //     const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']")
  //     if (link) {
  //       link.href = `/${objEstablishment.branch}.svg`
  //     }
  //   }

  // }, [establishments, queryParams.get('branch'), queryParams.get('room')])

  return (
    <div className={`bg-accent ${theme === 'carpediem' ? 'font-gillSans' : 'font-montserrat'} select-none`}>

      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MenuContainer theme={theme} hq={hq} />} />
            {/* <Route path='/' element={<UnavailableAccess />} /> */}
            <Route path='/cart' element={<Cart theme={theme} />} />
            <Route path='/verify' element={<Verify theme={theme} setAccessKey={setAccessKey} />} />
            <Route path='/order-summary' element={<OrderSummary theme={theme} accessKey={accessKey} setAccessKey={setAccessKey} deliveryPoint={deliveryPoint} />} />
            <Route path='/order-confirmed' element={<OrderConfirmed theme={theme} setAccessKey={setAccessKey} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  )
}

export default App
