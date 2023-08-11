import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from './pages/ProductIdPage'
import CartPage from './pages/CartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import LogoutPage from './pages/LogoutPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div className='principal-container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
