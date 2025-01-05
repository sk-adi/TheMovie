import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className="flex justify-between items-center px-6 lg:px-12 py-4 bg-gray-900">
  <div className="leftpart">
    <div className="logo text-yellow-400 text-2xl font-bold">
      TheMovie
    </div>
  </div>

  <div className="rightpart">
    <div className="links space-x-6">
      <NavLink to="/" className={({isActive})=>`${isActive? 'text-yellow-400':'text-white'} hover:text-yellow-400 transition`}>Home</NavLink>
      <NavLink to="/movies" className={({isActive})=>`${isActive?'text-yellow-400':'text-white'} hover:text-yellow-400 transition`}>Movies</NavLink>
      <NavLink to="webseries" className={({isActive})=>`${isActive? 'text-yellow-400':'text-white'} hover:text-yellow-400 transition`}>Web Series</NavLink>
      <NavLink to="about" className={({isActive})=>`${isActive? 'text-yellow-400':'text-white'} hover:text-yellow-400 transition`}>About</NavLink>
      <NavLink to="contact" className={({isActive})=>`${isActive? 'text-yellow-400':'text-white'} hover:text-yellow-400 transition`}>Contact</NavLink>
    </div>
  </div>
</div>


  )
}

export default Navbar