import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header style={{
      backgroundColor: '#FDF8F3',
      padding: '1rem 2rem',
      borderBottom: '2px solid #E5E1DC',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#8B6F47',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            IC
          </div>
          <h1 style={{
            color: '#8B6F47',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            margin: 0,
            fontFamily: 'serif'
          }}>
            InteriorCraft
          </h1>
        </div>

        <div style={{
          display: 'flex',
          gap: '2rem',
          color: '#8B6F47',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          <Link to="/" style={{textDecoration: 'none', color: '#8B6F47', padding: '0.5rem'}}>
            Home
          </Link>
          <Link to="/collections" style={{textDecoration: 'none', color: '#8B6F47', padding: '0.5rem'}}>
            Collections
          </Link>
          <Link to="/about" style={{textDecoration: 'none', color: '#8B6F47', padding: '0.5rem'}}>
            About
          </Link>
          <Link to="/services" style={{textDecoration: 'none', color: '#8B6F47', padding: '0.5rem'}}>
            Services
          </Link>
          <Link to="/contact" style={{textDecoration: 'none', color: '#8B6F47', padding: '0.5rem'}}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar