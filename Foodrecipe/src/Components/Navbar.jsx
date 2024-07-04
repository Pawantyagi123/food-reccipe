import React from 'react'
import logo from '/Image/burger.png'
export default function Navbar() {
  return (
    <div className='nav'>
      <img src={logo} alt="" />
      <h1>Food Recipe</h1>
    </div>
  )
}
