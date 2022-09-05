import React from 'react'
import { Link } from "react-router-dom"
import { product } from "../data/data"

const Product = () => {

  const products = product.map(product => 
    
      <div key = {product.id} className='product'>
        <h1>{product.name}
        <span className={product.span}>{product.subName}</span></h1>

        <p>{product.description}</p>

        <div className='product-buttons'>
          <button className='learn-more'>Learn more {">"}</button>
          <button className='shop-btn'><Link to="/productdetail">Buy{">"}</Link> </button>
        </div>
        
        <img className ="product-img" src={require(`../img/${product.image}`)} alt="product" />
      </div>
    
    )
  
  return (
    <div className='product-container'>
      {products}
    </div>
  )
}

export default Product