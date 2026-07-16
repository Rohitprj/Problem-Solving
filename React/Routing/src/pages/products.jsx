import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <p>I am product page</p>
      <Link className="text-blue-500 hover:underline bg-amber-400" to="/products/mens">Mens</Link>
      <Link className="text-blue-500 hover:underline bg-teal-400 " to="/products/womens">Womens</Link>
      <Outlet/>
    </div>
  )
}
