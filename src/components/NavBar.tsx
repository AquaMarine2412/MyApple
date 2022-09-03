import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {


  return (
   
    <nav className = "navBar">

      <MenuOutlinedIcon className="hamburger"/>

      <div className = "logo">
          <img className = "logo" src={`${require('../img/logo.png')}`} alt='logo'/>
      </div>
          
      <ul className='menu'>
          <li>Store</li>
          <li>myPhone</li>
          <li>myPad</li>
          <li>myBook</li>
          <li>myWatch</li>
          <li>Support</li>
      </ul>

      <SearchOutlinedIcon className='search'/>

      <ShoppingBagOutlinedIcon className='cart'/>

    </nav>
  )
}

export default NavBar