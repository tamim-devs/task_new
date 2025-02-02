import React from 'react'
import navLogo from '../../../public/nav__logo.png'
const Navbar = () => {
  return (
    <div className='p-2 bg-green-500 flex justify-center container  mx-auto'>
        <div>
          <img src={navLogo} alt="navLogo" />
        </div>
        <div>
          <ul className="flex items-center gap-x-6">
            <li className=''>Solutions</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
          <a>
            
          </a>
        </div>

    </div>
  )
}

export default Navbar