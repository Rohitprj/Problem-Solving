import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='flex gap-4 bg-gray-200 p-4 '>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/products">Products</Link>
    </nav>
  )
}
