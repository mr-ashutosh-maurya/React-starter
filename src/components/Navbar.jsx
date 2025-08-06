import React from 'react'
import './Navbar.css'
import {NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src="vite.svg" alt="" />
        <div className='links'>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/product'><li>Product</li></NavLink>
        </div>
        <div className='sec' onClick={()=>navigate('/')}><h3>Get started</h3></div>
    </div>
  )
}

export default Navbar