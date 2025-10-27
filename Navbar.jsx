import React from 'react'
import logo from "../first_web_img/logo.webp"
const Navbar = () => {
  return (
      <div className="navbar">
        <img src={logo} alt="" />
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
          <button className='btn1'>LOGIN</button>
          
      </div>
  );
};

export default Navbar