import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import SingleProductCard from '../components/SingleCard/SingleProductCard'
import AllProducts from '../Pages/AllProducts'
import SearchView from '../Pages/SearchView'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products' element={<AllProducts/>}/>
            <Route path='/search' element={<SearchView/>}/>
            <Route path='/singleproduct/:title/:id' element={<SingleProductCard/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
