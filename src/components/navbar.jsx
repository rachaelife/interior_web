import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

const Navbar = () => {
      const [menuOpen, setMenuOpen]= useState(false)
      const toggleMenu=()=>{
        setMenuOpen(prev => !prev)
      }
      
  return (
    <>
    <nav style={{backgroundColor: 'var(--color-cream)'}} className="soft-shadow sticky top-0 z-50">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Interior Design Logo"
              width={50}
              className="font-bold"
            />
            <h1 className="playwrite text-xl font-bold" style={{color: 'var(--color-dark-brown)'}}>InteriorCraft</h1>
          </div>

          <div className="hidden md:flex gap-5 font-bold" style={{color: 'var(--color-dark-brown)'}}>
            <Link to={"/"} className="hover:text-opacity-70 transition-colors">Home</Link>
            <Link to={""} className="hover:text-opacity-70 transition-colors">Collections</Link>
            <Link to={""} className="hover:text-opacity-70 transition-colors">About</Link>
            <Link to={""} className="hover:text-opacity-70 transition-colors">Services</Link>
            <Link to={""} className="hover:text-opacity-70 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <FaSearch />
            <div onClick={toggleMenu} className="w-7 h-5 relative z-40 md:hidden">
                 { menuOpen ? <IoClose size={24}/> : <FaBars size={20}/>} 
            </div>
            
          </div>
        </div>
        { menuOpen &&(
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 font-semibold" style={{backgroundColor: 'var(--color-beige)', color: 'var(--color-dark-brown)'}}>
            <Link onClick={toggleMenu} to="/" className="hover:text-opacity-70 transition-colors">Home</Link>
            <Link onClick={toggleMenu} to="" className="hover:text-opacity-70 transition-colors">Collections</Link>
            <Link onClick={toggleMenu} to="" className="hover:text-opacity-70 transition-colors">About</Link>
            <Link onClick={toggleMenu} to="" className="hover:text-opacity-70 transition-colors">Services</Link>
            <Link onClick={toggleMenu} to="" className="hover:text-opacity-70 transition-colors">Contact</Link>
          </div>

        )}
      </nav>
    </>
  )
}

export default Navbar