import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style/App.scss';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Cart from './Pages/Cart';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import SignIn from './Pages/SignIn';




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route index element={<Home/>}/>
          <Route path="/productdetail" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
