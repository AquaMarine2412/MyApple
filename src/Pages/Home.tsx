import React from 'react'
import { Outlet } from "react-router-dom"

import Donate from '../components/Donate'
import Promo from './Promo'
import Product from '../components/Product'



const Main = () => {
  return (
    <div>
        <Donate/>
        <Promo/>
        <Product/>

        <Outlet />
        
    </div>
  )
}

export default Main