import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const NavBar = () => {


  return (
    <div className='navBar'>
        <MenuOutlinedIcon className="hamburger"/>
        
        <nav className = "menu">
            <input type="text" value="search"/>
            <ul>
                <li>myPhone</li>
                <li>myPad</li>
                <li>myBook</li>
                <li>myWatch</li>
            </ul>
        </nav>
        <div className = "logo">
            <img className = "logo" src={`${require('../img/logo.png')}`} alt='logo'/>
        </div>
        
       <ShoppingBagOutlinedIcon className='cart'/>
    
        
    </div>
  )
}

export default NavBar