import React from 'react'
import Donate from '../components/Donate'
import NavBar from '../components/NavBar'
import Promo from './Promo'
import Product from '../components/Product'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Donate/>
        <Promo/>
        <Product/>
    </div>
  )
}

export default Main