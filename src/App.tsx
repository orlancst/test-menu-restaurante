
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Testing from './components/Testing';
import MenuContainer from './components/MenuContainer';
import Cart from './components/Cart';
import Verify from './components/Verify';

function App() {

  // byhours
  // primary: naranja
  // secondary: blanco
  // accent: morado oscuro
  // neutral: morado claro

  return (
    <div className=''>
      <BrowserRouter>

        <Routes>
            {/* <Route path='/' element={<Testing />} /> */}
            <Route path='/' element={<MenuContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/verify' element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
