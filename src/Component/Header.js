import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import Hero from './Hero'
function Header() {
  return (
    <div className='main'>
      <Navigation/>
      <Hero/>
    </div>
  )
}

export default Header