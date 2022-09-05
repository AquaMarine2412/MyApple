import React from 'react'

const Donate = () => {
  return (

    <div className='donate'>
      <div className='charity'>
          <h2>Charity Company</h2>
          <img className ="charity-logo" src={require("../img/charity.png")} alt="logo" />
      </div>
      <p>Donate to support whatever you want to support 🡕 </p>
    </div>
  )
}

export default Donate