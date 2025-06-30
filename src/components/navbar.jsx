import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

const Navbar = () => {
  return (
    <div style={{
      backgroundColor: '#FDF8F3',
      padding: '1rem',
      borderBottom: '2px solid #ccc',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <img
            src={logo}
            alt="Interior Design Logo"
            width={50}
            style={{borderRadius: '50%'}}
          />
          <h1 style={{color: '#8B6F47', fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>
            InteriorCraft
          </h1>
        </div>

        <div style={{display: 'flex', gap: '2rem', color: '#8B6F47', fontWeight: 'bold'}}>
          <Link to="/" style={{textDecoration: 'none', color: '#8B6F47'}}>Home</Link>
          <Link to="/collections" style={{textDecoration: 'none', color: '#8B6F47'}}>Collections</Link>
          <Link to="/about" style={{textDecoration: 'none', color: '#8B6F47'}}>About</Link>
          <Link to="/services" style={{textDecoration: 'none', color: '#8B6F47'}}>Services</Link>
          <Link to="/contact" style={{textDecoration: 'none', color: '#8B6F47'}}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar