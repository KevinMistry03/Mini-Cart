import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './Pages/Product'
import SingleProduct from './Components/SingleProduct'
import CartProduct from './Pages/CartProduct'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/product' element={<Product />}/>
        <Route exact path='/singleProduct:id' element={<SingleProduct />}/>
        <Route exact path='/cartproducts' element={<CartProduct />}/>
        <Route exact path='/checkout' element={<CheckOut />}/>
        <Route exact path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
