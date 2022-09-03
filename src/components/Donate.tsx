import React from 'react'

const Donate = () => {
  return (

    <div className='donate'>
      <div className='charity'>
          <h2>Charity Company</h2>
          <img className ="charity-logo" src={require("../img/charity.png")} alt="logo" />
      </div>
      <a href='random.com' target="_blank">Donate to support whatever you want to support 🡕 </a>
    </div>
  )
}

export default Donate