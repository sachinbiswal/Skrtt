import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='box1'>
        <img className='logoimage' src="https://www.brandbucket.com/sites/default/files/logo_uploads/258982/large_cruzia.png" alt="" />        
          <p>&copy;{new Date().getFullYear()} Cruzia.</p>
          
      </div>
      <div>
        <h3 >LANGUAGE</h3>
        <select className='select' name="" id="">
          <option value="English">English</option>
          <option value="HIndi">HIndi</option>
          <option value="Turkce">Turkce</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Odia">Odia</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>
      <div>
        <h3 >COMPANY</h3>
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Press</a>
        <a href="">Ad Choices</a>
        </div>
      <div>
        <h3 >CONDITIONS</h3>
        <a href="">Privacy</a>
        <a href="">Cookies</a>
        <a href="">Terms</a>
        <a href="">Communinty Guidelines</a>
      </div>
      <div>
      <h3 >Contact</h3>
        <a href="">Support</a>
        <a href="">Security</a>
        <a href="">Safety Tips</a>
        <a href="">Impressum</a>
      </div>
      <div>
      <h3 >Follow</h3>
        <a href="">Blog</a>
        <a href="">Tech Blog</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">X</a>
      </div>
      
    </div>
  )
}

export default Footer