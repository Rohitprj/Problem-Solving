import React from 'react'
import SubHero from './SubHero'

export default function Hero({ name, forSubHero }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>I am hero section</p>
      <SubHero forSubHero={forSubHero} />  
    </div>
  )
}
