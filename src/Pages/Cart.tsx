import React from 'react'

const Cart = () => {
  return (
    <div className='cartContainer'>

      <div className='cartInfo'>
        <h1>Review your bag.</h1>
        <p>Free delivery and free returns.</p>
      </div>

      <div className='cart'>

        <img className='cartProductImage' src={require("../img/myPhone.jpeg")} alt='product'></img>

        <div className='cartProductInfo'>

          <div className='cartDescription'>
            <h2 >myPhone 13 Red</h2>
            <h2 className='itemQuantity'>1</h2>
            <h2 className='price'>729$</h2>
          </div>

          <div className='price'>
            <div className='subtotal'>
              <p>Subtotal</p>
              <p>729$</p>
            </div>
            <div className='shipping'>
              <p>Shipping</p>
              <p>10$</p>
            </div>
            <div className='total'>
              <p>Total</p>
              <p>739$</p>
            </div>
          </div>

          <button>Proceed To Pay</button>
        </div>

      </div>

        
    </div>
  )
}

export default Cart