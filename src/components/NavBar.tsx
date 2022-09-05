import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const [searchIcon, setSearchIcon] = useState(true)

  const style = {
    openMenu: {
      height: isOpen? "100vh" : "50px;"
    },
    displayNone: {
      display: !isOpen? "initial" : "none"
    }
  }
  
  const openMenu = () => setIsOpen(prevMenu => !prevMenu)

  const showInput = () => setSearchIcon(prevIcon=>!prevIcon)

  return (

    <nav className = {isOpen? "navBar rolledOutMenu" : "navBar"}>

      <MenuOutlinedIcon onClick={openMenu} className="hamburger"/>

      <div className = "logo">
          <Link to="/">
            <img className = "logo" src={`${require('../img/logo.png')}`} alt='logo'/>
          </Link>
         
      </div>
          
      <ul className={isOpen? 'menu menuOpen' : "menu"}>
          {isOpen &&  <li>
                        <input className='searchInput' type="text" placeholder='search'/>
                      </li>}
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/productdetail">myPhone</Link>
            </li>
          <li>
            <Link to="/productdetail">myPad</Link>
          </li>
          <li>
            <Link to="/productdetail">myBook</Link>
          </li>
          <li>
            <Link to="/productdetail">myWatch</Link>
          </li>
          <li>Support</li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
      </ul>

      <div className='searchIcon-cart' >

      {searchIcon? <SearchOutlinedIcon onClick={showInput}className='search'/> : <input type="text" className="searchInputBar" placeholder='search'/>}

      <Link to="/cart"><ShoppingBagOutlinedIcon style={style.displayNone}className='cart-icon'/></Link>
      </div>
    
    </nav>
  )
}

export default NavBar