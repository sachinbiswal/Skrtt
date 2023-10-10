import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'
function Navigation() {
  return (
    <nav>
        <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/258982/large_cruzia.png'/>
        <ul className='pages'>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="schedule" smooth={true} duration={500}>Schedule</Link></li>
        <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        <button className='btn1'>Login</button>
        <button className='btn2'>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navigation;
