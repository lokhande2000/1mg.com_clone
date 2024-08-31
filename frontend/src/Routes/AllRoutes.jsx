import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import SingleProductCard from '../components/SingleCard/SingleProductCard'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='/singleproduct/:title/:id' element={<SingleProductCard/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
