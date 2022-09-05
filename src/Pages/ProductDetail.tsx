import React from 'react'
import { product } from "../data/data"

const ProductDetail = () => {

    const formData = {
        color: ""
    }
        


  return (
    <div className='productDetailContainer'>

        <div className='productDetail'>
            <h1>Buy myPhone 13</h1>
            <img className="productDetailImg" src={require("../img/myPhone.jpeg")}alt='product'></img>
        </div>
   
        <div className='productDetailVariants'>
            <div className='description'>
                <h2>Finish. <span>Pick your favorite.</span></h2>

                <p>Color</p>
            </div>

            <div className='radio'>
                <label className="label"htmlFor='black'> Bloody Red
                <input
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked={formData.color === "red"}
                />
                <span className='radioInput rp-red'></span>
                </label>

                <label className="label" htmlFor='black'>Black Hole Black
                <input
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                    checked={formData.color === "black"}
                />
                <span className='rp-black radioInput'></span>
                </label>

                <label className="label" htmlFor='silver'> Silver (before it oxidizes)
                <input
                    type="radio"
                    id="silver"
                    name="color"
                    value="silver"
                    checked={formData.color === "silver"}
                />
                <span className='rp-silver radioInput'></span>
                </label>

                <label className="label" htmlFor='gold'> Gold (It's not but it looks like)
                <input
                    type="radio"
                    id="gold"
                    name="color"
                    value="gold"
                    checked={formData.color === "gold"}
                />
                <span className='rp-gold radioInput'></span>
                </label>

            </div>

            <button className='cartButton'>Add To Cart</button>
        </div> 
        
    </div>
  )
}

export default ProductDetail