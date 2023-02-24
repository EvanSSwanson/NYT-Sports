import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-message-container'>
        <h2 className='error-msg'>Oops! Seems you hitkickedthrew the sportspuckball out of the courtparkrink.<br></br>&#40;But.. like.. in a bad way&#41;</h2>
      </div>
      <NavLink to='/'>
        <button className='return-home-button'>Return Home</button>
      </NavLink>
    </div>
  )
}

export default Error