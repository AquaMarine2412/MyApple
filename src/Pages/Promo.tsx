import React from 'react'

const Product = () => {
  return (
    <div className='promo'>
      <h1><i>Get <span>supercharged</span> for school.</i></h1>
        <p>Save on myBook or myPad. </p>
        <p>Plus get a gift card up to $150.</p>
        <button className='shop-btn'>Shop now {">"}</button>
      <img className ="supercharged" src={require("../img/supercharged.jfif")} alt="product" />
    </div>
  )
}

export default Product