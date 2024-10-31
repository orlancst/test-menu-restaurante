
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Testing from './components/Testing';

function App() {

  // byhours
  // primary: naranja
  // secondary: blanco
  // accent: morado oscuro
  // neutral: morado claro

  return (
    <div>
      <BrowserRouter>



        <Routes>
            <Route path='/' element={<Testing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
